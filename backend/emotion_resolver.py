import json

from backend.llm_interface import LLMInterface

class EmotionResolver:
    def __init__(self, llm: LLMInterface):
        self.llm = llm

    def resolve(self, emotion: str) -> str:

        prompt = f"""
            you study emotions for a living. while others may know sad, angry and happy. 
            Your vocabulary of emotions and mastery of words in all languages is simply uncanny in the world. 
            you want to share some of this cross-cultural knowledge that you have. 
            You should find all other emotion words that fall into the same category, 
            but that are more specific and detailed, maybe they only capture a subset of the emotion-word that users said. 
            you find words that apply to different contexts and specific situations, making the emotion more nuanced and accurate. 
            focus more on different applications of the emotion rather than words that only change the intensity of the emotion. 

            if there are not many in English, try your knowledge of 
            [arabic, Russian, Persian, Chinese, Japanese, Spanish, German, french] 
            for nuanced words for specific emotions.
            mention them only if they have words that cannot be translated into one word in English, 
            and has significantly more meaning to them than the english versions.  
            write the word in the other language and a short English description. 
            do not repeat boring translations of the initial word. Search for surprising and interesting ones.
            try to aim for 6 to 12 new emotions.

            return in following json format for example for "angry": 
            {{ "intro": "Anger is a broad emotion, but it can take many different forms depending on the cause, intensity, and context.", 
              emotions: [
              {{"name":"Toksikodínios (τοξικοδίνιος)", 
                "languege":"Greek", 
                "meaning":"A slow-burning, self-destructive anger that poisons the person feeling it."
                "cultural context" : 
                "In Greece Ancient Greek philosophy and tragedy often highlighted 
                the dangers of unchecked emotions, such as excessive wrath or resentment, 
                to individual and societal well-being. 
                Characters like Achilles in the Iliad and Medea in Euripides' Medea demonstrate 
                how self-destructive anger leads to personal ruin. Stoic philosophers 
                like Epictetus and Marcus Aurelius, influenced by Greek ideas, 
                advised against harboring anger to prevent inner turmoil."}}, .......
              ] }}

            The chosen emotion word is "{emotion}". 
        """


        response = self.llm.get_response(prompt)
        try:
            json_response = json.loads(response)
            return json_response
        except Exception:
            return "Error: Invalid JSON response from the LLM."
        
if __name__ == "__main__":
    from backend.gpt import GPT
    print(json.dumps(EmotionResolver(GPT()).resolve("happy")))