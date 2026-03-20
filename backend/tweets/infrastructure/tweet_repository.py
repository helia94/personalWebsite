from typing import List

from backend.database import db
from backend.tweets.domain.tweet import Tweet
from backend.tweets.domain.repository import TweetRepository
from backend.tweets.infrastructure.tweet_model import TweetModel


class SqlAlchemyTweetRepository(TweetRepository):
    def save(self, tweet: Tweet) -> Tweet:
        model = TweetModel(body=tweet.body, created_at=tweet.created_at)
        db.session.add(model)
        db.session.commit()
        tweet.id = model.id
        return tweet

    def find_all(self) -> List[Tweet]:
        models = TweetModel.query.order_by(TweetModel.created_at.desc()).all()
        return [
            Tweet(id=m.id, body=m.body, created_at=m.created_at)
            for m in models
        ]
