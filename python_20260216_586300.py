# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "API do Portfolio"}

@app.get("/projects")
def get_projects():
    return [
        {"id": 1, "name": "Task Manager", "tech": "FastAPI, PostgreSQL"},
        {"id": 2, "name": "Automation Scripts", "tech": "Python, Pandas"},
    ]