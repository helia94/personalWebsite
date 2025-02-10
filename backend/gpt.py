from openai import OpenAI
import os

from backend.llm_interface import LLMInterface

model_list = [
    "chatgpt-4o-latest", 
    "gpt-4-turbo",
    "gpt-4",
    "gpt-3.5-turbo",
]

class GPT(LLMInterface):
    def __init__(self):
        self.client = client = OpenAI(
            api_key=os.environ.get("OPENAI_API_KEY"), 
        )
        self.model_name = 'chatgpt-4o-latest'

    def get_response(self, prompt: str) -> str:
        response = self.client.chat.completions.create(
            model=self.model_name,
            messages=[{"role": "user", "content": prompt}],
            response_format={"type": "json_object"},
            temperature=0.2
        )
        return response.choices[0].message.content