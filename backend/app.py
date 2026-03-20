import os
import html
import asyncio
import aiohttp
from urllib.parse import parse_qsl, urlencode, urlparse, urlunparse
from flask import Flask, request, jsonify
from flask_cors import CORS
from backend.database import db  # Import from the new database module
import requests
from sqlalchemy.exc import SQLAlchemyError
from backend.emotion_resolver import EmotionResolver
from backend.gpt import GPT

app = Flask(__name__)
CORS(app)

# Configure SQLAlchemy
def _sanitize_database_url(database_url: str) -> str:
    """Normalize environment-provided DB URLs before passing to SQLAlchemy."""

    cleaned = (database_url or "").strip()
    if (
        len(cleaned) >= 2
        and cleaned[0] == cleaned[-1]
        and cleaned[0] in {"\"", "'"}
    ):
        cleaned = cleaned[1:-1].strip()
    return cleaned


db_url = _sanitize_database_url(os.environ.get("DATABASE_URL", "sqlite:///test.db"))
if db_url and db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)


def _add_sslmode_require(database_url: str) -> str:
    """Ensure Postgres connections request TLS in hosted environments."""

    if not database_url.startswith("postgresql://"):
        return database_url

    parsed = urlparse(database_url)
    query_params = dict(parse_qsl(parsed.query, keep_blank_values=True))
    query_params.setdefault("sslmode", "require")
    return urlunparse(parsed._replace(query=urlencode(query_params)))


db_url = _add_sslmode_require(db_url)
app.config["SQLALCHEMY_DATABASE_URI"] = db_url
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)  # Initialize the db with the app
emotion_resolver = None

ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "secret123")
RESEND_API_KEY = os.environ.get("RESEND_API_KEY")
RESEND_FROM_EMAIL = os.environ.get(
    "RESEND_FROM_EMAIL",
    "Helia Jamshidi Website <notifications@heliajamshidi.me>",
)
NOTIFICATION_EMAIL = os.environ.get("NOTIFICATION_EMAIL", "helia.jm@gmail.com")

# Import models after db is defined
from backend.models import Questions, Messages
from backend.comments.infrastructure.comment_model import CommentModel
from backend.comments.infrastructure.comment_repository import SqlAlchemyCommentRepository
from backend.comments.application.comment_service import CommentService
from backend.tweets.infrastructure.tweet_model import TweetModel
from backend.tweets.infrastructure.tweet_repository import SqlAlchemyTweetRepository
from backend.tweets.application.tweet_service import TweetService


def _comment_service() -> CommentService:
    return CommentService(SqlAlchemyCommentRepository())


def _tweet_service() -> TweetService:
    return TweetService(SqlAlchemyTweetRepository())


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


def get_emotion_resolver():
    """Lazily initialize the emotion resolver so unrelated routes stay available."""

    global emotion_resolver
    if emotion_resolver is None:
        emotion_resolver = EmotionResolver(GPT())
    return emotion_resolver

@app.before_first_request
def create_tables():
    try:
        db.create_all()
    except SQLAlchemyError as exc:
        app.logger.exception("Database initialization skipped: %s", exc)

@app.route("/api/questions", methods=["GET"])
def get_questions():
    try:
        all_questions = Questions.query.order_by(Questions.id.desc()).all()
        return jsonify([q.to_dict() for q in all_questions])
    except SQLAlchemyError as exc:
        app.logger.exception(
            "Unable to load AMA questions (check DATABASE_URL credentials): %s", exc
        )
        return jsonify({"error": "Question service is temporarily unavailable."}), 503

@app.route("/api/questions", methods=["POST"])
def add_question():
    data = request.json
    question_text = data.get("question", "")
    name = data.get("name", "")

    try:
        new_q = Questions(question=question_text, name=name)
        db.session.add(new_q)
        db.session.commit()
    except SQLAlchemyError as exc:
        db.session.rollback()
        app.logger.exception("Unable to save AMA question: %s", exc)
        return jsonify({"error": "Question service is temporarily unavailable."}), 503

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

    try:
        q = Questions.query.get(qid)
        if q:
            q.answer = answer
            db.session.commit()
            return jsonify({"message": "Answer added"}), 200
        return jsonify({"error": "Not found"}), 404
    except SQLAlchemyError as exc:
        db.session.rollback()
        app.logger.exception("Unable to save AMA answer: %s", exc)
        return jsonify({"error": "Question service is temporarily unavailable."}), 503

@app.route("/api/messages", methods=["POST"])
def add_message():
    data = request.json
    msg = data.get("message", "")
    name = data.get("name", "")
    email = data.get("email", "")

    try:
        new_msg = Messages(message=msg, name=name, email=email)
        db.session.add(new_msg)
        db.session.commit()
    except SQLAlchemyError as exc:
        db.session.rollback()
        app.logger.exception("Unable to save message: %s", exc)
        return jsonify({"error": "Message service is temporarily unavailable."}), 503

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

@app.route("/api/comments", methods=["GET"])
def get_comments():
    page_url = request.args.get("url", "")
    if not page_url:
        return jsonify([])
    try:
        comments = _comment_service().get_comments(page_url)
        return jsonify([c.to_dict() for c in comments])
    except SQLAlchemyError as exc:
        app.logger.exception("Unable to load comments: %s", exc)
        return jsonify({"error": "Comment service temporarily unavailable."}), 503


@app.route("/api/comments", methods=["POST"])
def add_comment():
    data = request.json or {}
    page_url = data.get("page_url", "")
    body = data.get("body", "")
    author_name = data.get("author_name", "") or None

    if not page_url or not body.strip():
        return jsonify({"error": "page_url and body are required."}), 400

    try:
        comment = _comment_service().add_comment(
            page_url=page_url, body=body, author_name=author_name
        )
        return jsonify(comment.to_dict()), 201
    except SQLAlchemyError as exc:
        db.session.rollback()
        app.logger.exception("Unable to save comment: %s", exc)
        return jsonify({"error": "Comment service temporarily unavailable."}), 503


@app.route("/api/tweets", methods=["GET"])
def get_tweets():
    try:
        tweets = _tweet_service().get_tweets()
        return jsonify([t.to_dict() for t in tweets])
    except SQLAlchemyError as exc:
        app.logger.exception("Unable to load tweets: %s", exc)
        return jsonify({"error": "Tweet service temporarily unavailable."}), 503


@app.route("/api/tweets", methods=["POST"])
def post_tweet():
    data = request.json or {}
    password = data.get("password", "")
    body = data.get("body", "")

    if password != ADMIN_PASSWORD:
        return jsonify({"error": "Unauthorized"}), 403

    if not body.strip():
        return jsonify({"error": "body is required."}), 400

    try:
        tweet = _tweet_service().post_tweet(body=body)
        return jsonify(tweet.to_dict()), 201
    except SQLAlchemyError as exc:
        db.session.rollback()
        app.logger.exception("Unable to save tweet: %s", exc)
        return jsonify({"error": "Tweet service temporarily unavailable."}), 503


@app.route("/api/emotion", methods=["POST"])
def emotion():
    data = request.json
    emotion = data.get("emotion")
    try:
        json_response = get_emotion_resolver().resolve(emotion)
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
