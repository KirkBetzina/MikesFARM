from model import Todo

import motor.motor_asyncio
import os 
import dns.resolver
dns.resolver.default_resolver=dns.resolver.Resolver(configure=False)
dns.resolver.default_resolver.nameservers=['8.8.8.8'] 

client = motor.motor_asyncio.AsyncIOMotorClient(os.environ.get("DATABASE_URL"))
database = client.TodoList
collection = database.todo



async def fetch_one_todo(title):
    document = await collection.find_one({"title":title})
    return document

async def fetch_all_todos():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
     todos.append(Todo(**document))
    print('YO IM WHATEVER A CURSOR IS',todos, )
    return todos

async def create_todo(todo):
    document = todo
    result = await collection.insert_one(document)
    return document

async def update_todo(title, desc):
    await collection.update_one({"title":title}, {"$set":{
        "description":desc}})
    document = await collection.find_one({"title":title})
    return document

async def remove_todo(title):
    print(title)
    await collection.delete_one({"title":title})
    return True

