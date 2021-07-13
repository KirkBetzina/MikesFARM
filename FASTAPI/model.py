from pydantic import BaseModel

class Menu(BaseModel):
    food: str
    description: str
    price: str