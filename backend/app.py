import os
import html
import asyncio
import aiohttp
from flask import Flask, request, jsonify
from flask_cors import CORS
from backend.database import db  # Import from the new database module
import requests
from backend.emotion_resolver import EmotionResolver
from backend.gpt import GPT

app = Flask(__name__)
CORS(app)

# Configure SQLAlchemy
db_url = os.environ.get("DATABASE_URL", "sqlite:///test.db")
if db_url and db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)
app.config["SQLALCHEMY_DATABASE_URI"] = db_url
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)  # Initialize the db with the app
emotion_resolver = EmotionResolver(GPT())

ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "secret123")
RESEND_API_KEY = os.environ.get("RESEND_API_KEY")
RESEND_FROM_EMAIL = os.environ.get(
    "RESEND_FROM_EMAIL",
    "Helia Jamshidi Website <notifications@heliajamshidi.me>",
)
NOTIFICATION_EMAIL = os.environ.get("NOTIFICATION_EMAIL", "helia.jm@gmail.com")

# Import models after db is defined
from backend.models import Questions, Messages


def send_email_notification(subject: str, body_html: str) -> None:
    """Send an email notification using the Resend API."""

    if not RESEND_API_KEY:
        app.logger.warning("RESEND_API_KEY not set; skipping email notification.")
        return

    try:
        response = requests.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {RESEND_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "from": RESEND_FROM_EMAIL,
                "to": [NOTIFICATION_EMAIL],
                "subject": subject,
                "html": body_html,
            },
            timeout=10,
        )
        if response.status_code >= 400:
            app.logger.error(
                "Failed to send email notification: %s - %s",
                response.status_code,
                response.text,
            )
    except requests.RequestException as exc:
        app.logger.exception("Error while sending email notification: %s", exc)

@app.before_first_request
def create_tables():
    db.create_all()

@app.route("/api/questions", methods=["GET"])
def get_questions():
    all_questions = Questions.query.order_by(Questions.id.desc()).all()
    return jsonify([q.to_dict() for q in all_questions])

@app.route("/api/questions", methods=["POST"])
def add_question():
    data = request.json
    question_text = data.get("question", "")
    name = data.get("name", "")
    new_q = Questions(question=question_text, name=name)
    db.session.add(new_q)
    db.session.commit()
    safe_name = (name or "").strip() or "Anonymous"
    escaped_name = html.escape(safe_name)
    escaped_question = html.escape(question_text).replace("\n", "<br>")
    send_email_notification(
        subject=f"New AMA question from {safe_name}",
        body_html=(
            f"<p><strong>Name:</strong> {escaped_name}</p>"
            f"<p><strong>Question:</strong><br>{escaped_question}</p>"
        ),
    )
    return jsonify({"message": "Question added"}), 201

@app.route("/api/questions/answer", methods=["POST"])
def answer_question():
    data = request.json
    qid = data.get("id")
    answer = data.get("answer", "")
    password = data.get("password", "")
    if password != ADMIN_PASSWORD:
        return jsonify({"error": "Unauthorized"}), 403
    q = Questions.query.get(qid)
    if q:
        q.answer = answer
        db.session.commit()
        return jsonify({"message": "Answer added"}), 200
    return jsonify({"error": "Not found"}), 404

@app.route("/api/messages", methods=["POST"])
def add_message():
    data = request.json
    msg = data.get("message", "")
    name = data.get("name", "")
    email = data.get("email", "")
    new_msg = Messages(message=msg, name=name, email=email)
    db.session.add(new_msg)
    db.session.commit()
    safe_name = (name or "").strip() or "Anonymous"
    safe_email = (email or "").strip() or "Not provided"
    escaped_name = html.escape(safe_name)
    escaped_email = html.escape(safe_email)
    escaped_message = html.escape(msg).replace("\n", "<br>")
    send_email_notification(
        subject=f"New message from {safe_name}",
        body_html=(
            f"<p><strong>Name:</strong> {escaped_name}</p>"
            f"<p><strong>Email:</strong> {escaped_email}</p>"
            f"<p><strong>Message:</strong><br>{escaped_message}</p>"
        ),
    )
    return jsonify({"message": "Message saved"}), 201

@app.route("/api/emotion", methods=["POST"])
def emotion():
    data = request.json
    emotion = data.get("emotion")
    try:
        json_response = emotion_resolver.resolve(emotion)
        return jsonify(json_response)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

async def fetch_async(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            return await resp.text()

@app.route("/proxy")
def proxy():
    target_url = request.args.get("url")
    try:
        loop = asyncio.get_event_loop()
        text = loop.run_until_complete(fetch_async(target_url))
        return text
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ... rest of your routes ...

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
