from abc import ABC, abstractmethod
from typing import List

from backend.tweets.domain.tweet import Tweet


class TweetRepository(ABC):
    @abstractmethod
    def save(self, tweet: Tweet) -> Tweet:
        ...

    @abstractmethod
    def find_all(self) -> List[Tweet]:
        ...
