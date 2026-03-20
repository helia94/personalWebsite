import html
from typing import List, Optional

from backend.comments.domain.comment import Comment
from backend.comments.domain.repository import CommentRepository


class CommentService:
    def __init__(self, repository: CommentRepository):
        self._repo = repository

    def add_comment(
        self,
        page_url: str,
        body: str,
        author_name: Optional[str] = None,
    ) -> Comment:
        safe_body = html.escape(body.strip())
        safe_name = (
            html.escape(author_name.strip())
            if author_name and author_name.strip()
            else None
        )
        comment = Comment(page_url=page_url, body=safe_body, author_name=safe_name)
        return self._repo.save(comment)

    def get_comments(self, page_url: str) -> List[Comment]:
        return self._repo.find_by_page_url(page_url)
