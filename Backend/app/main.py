from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from pathlib import Path

# Cria o app FastAPI
app = FastAPI(title="Portfolio API")

# Permite que seu site (frontend) acesse a API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Em produção, coloque a URL do seu site
    allow_methods=["*"],
    allow_headers=["*"],
)


BASE_DIR = Path(__file__).resolve().parent.parent  # Agora é a pasta Backend/
DATA_DIR = BASE_DIR / "data"

def read_json(filename):
    path = DATA_DIR / filename
    print(f"Tentando ler: {path}")  # Isso vai aparecer no terminal
    
    if not path.exists():
        print(f"Arquivo não encontrado: {filename}")
        return []
    
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
        print(f"Arquivo carregado: {filename} com {len(data)} itens")
        return data

# Rota 1: Listar projetos
@app.get("/api/projects")
def get_projects(lang: str = "en"):  # padrão inglês
    filename = f"{lang}/projects.json"
    return read_json(filename)

@app.get("/api/skills")
def get_skills(lang: str = "en"):
    filename = f"{lang}/skills.json"
    return read_json(filename)

@app.get("/api/profile")
def get_profile(lang: str = "en"):
    filename = f"{lang}/profile.json"
    return read_json(filename)

# Rota de teste
@app.get("/")
def root():
    return {"message": "API do Portfolio funcionando!"}