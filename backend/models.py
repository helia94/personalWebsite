from backend.database import db  # Import from the new database module

class Questions(db.Model):
    __tablename__ = 'personal_question'
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.Text, nullable=False)
    answer = db.Column(db.Text, nullable=True)
    name = db.Column(db.String(100), nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "question": self.question,
            "answer": self.answer,
            "name": self.name
        }

class Messages(db.Model):
    __tablename__ = 'personal_message'
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.Text, nullable=False)
    name = db.Column(db.String(100), nullable=True)
    email = db.Column(db.String(100), nullable=True)
