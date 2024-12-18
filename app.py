from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import hashlib
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_USER = os.getenv("MONGO_USER")
MONGO_PASS = os.getenv("MONGO_PASS")

client = MongoClient(f"mongodb+srv://{MONGO_USER}:{MONGO_PASS}@cluster0.opljl.mongodb.net/")
db = client["4goodai"]
users = db["users"]

app = FastAPI()

origins = [
    "http://localhost:3000",
     # React frontend URL during development
    # Add more origins as needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Add other allowed methods as needed
    allow_headers=["*"],
)

def hash_password(password):
        return hashlib.sha256(password.encode()).hexdigest()

@app.post("/login")
async def login(request: Request):
    data = await request.json()
    username = data.get("username")
    password = data.get("password")
    user = users.find_one({"username": username})
    if user is None:
          raise HTTPException(status_code=401, detail="Invalid username")
    if user["password"] != hash_password(password):
          raise HTTPException(status_code=401, detail="Invalid password")
    return {"message": "Logged in successfully"}

@app.post("/signup")
async def signup(request: Request):
    data = await request.json()
    username = data.get("username")
    password = data.get("password")
    hashed_password = hash_password(password)
    user = users.find_one({"username": username})
    if user is not None:
        raise HTTPException(status_code=400, detail="Username already exists")
    users.insert_one({"username": username, "password": hashed_password})
    return JSONResponse({"message":"User added succesfully"})


        