from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional


@dataclass
class Tweet:
    body: str
    id: Optional[int] = None
    created_at: datetime = field(default_factory=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "body": self.body,
            "created_at": self.created_at.isoformat(),
        }
