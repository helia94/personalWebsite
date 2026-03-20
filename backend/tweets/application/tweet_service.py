import html
from typing import List

from backend.tweets.domain.tweet import Tweet
from backend.tweets.domain.repository import TweetRepository


class TweetService:
    def __init__(self, repository: TweetRepository):
        self._repo = repository

    def post_tweet(self, body: str) -> Tweet:
        safe_body = html.escape(body.strip())
        return self._repo.save(Tweet(body=safe_body))

    def get_tweets(self) -> List[Tweet]:
        return self._repo.find_all()
