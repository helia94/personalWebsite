from datetime import datetime

from backend.database import db


class TweetModel(db.Model):
    __tablename__ = "tweet"
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
