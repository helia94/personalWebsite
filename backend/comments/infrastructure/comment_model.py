from datetime import datetime

from backend.database import db


class CommentModel(db.Model):
    __tablename__ = "page_comment"
    id = db.Column(db.Integer, primary_key=True)
    page_url = db.Column(db.String(500), nullable=False, index=True)
    body = db.Column(db.Text, nullable=False)
    author_name = db.Column(db.String(100), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
