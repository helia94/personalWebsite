from abc import ABC, abstractmethod
from typing import List

from backend.comments.domain.comment import Comment


class CommentRepository(ABC):
    @abstractmethod
    def save(self, comment: Comment) -> Comment:
        ...

    @abstractmethod
    def find_by_page_url(self, page_url: str) -> List[Comment]:
        ...
