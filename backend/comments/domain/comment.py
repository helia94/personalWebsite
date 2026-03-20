from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional


@dataclass
class Comment:
    page_url: str
    body: str
    author_name: Optional[str] = None
    id: Optional[int] = None
    created_at: datetime = field(default_factory=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "page_url": self.page_url,
            "body": self.body,
            "author_name": self.author_name or "Anonymous",
            "created_at": self.created_at.isoformat(),
        }
