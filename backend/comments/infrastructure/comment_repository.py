from typing import List

from backend.database import db
from backend.comments.domain.comment import Comment
from backend.comments.domain.repository import CommentRepository
from backend.comments.infrastructure.comment_model import CommentModel


class SqlAlchemyCommentRepository(CommentRepository):
    def save(self, comment: Comment) -> Comment:
        model = CommentModel(
            page_url=comment.page_url,
            body=comment.body,
            author_name=comment.author_name,
            created_at=comment.created_at,
        )
        db.session.add(model)
        db.session.commit()
        comment.id = model.id
        return comment

    def find_by_page_url(self, page_url: str) -> List[Comment]:
        models = (
            CommentModel.query
            .filter_by(page_url=page_url)
            .order_by(CommentModel.created_at.asc())
            .all()
        )
        return [
            Comment(
                id=m.id,
                page_url=m.page_url,
                body=m.body,
                author_name=m.author_name,
                created_at=m.created_at,
            )
            for m in models
        ]
