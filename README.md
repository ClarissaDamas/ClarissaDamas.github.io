# ClarissaDamas.github.io  - Full Stack Portfolio API & Frontend

## About

This project is my professional portfolio built using a decoupled full-stack architecture, with an independent backend (FastAPI) and frontend (Vanilla JavaScript + Bootstrap).

The main goal was to apply modern web development principles such as:

- REST API design
- Asynchronous JavaScript consumption
- Internationalization (i18n)
- Interface resilience (fallback strategy)
- CI/CD and containerization practices

---

## Architecture

The application follows a fully decoupled architecture:

Frontend (Static)   
REST API (FastAPI)  
JSON-based structured data  

The frontend consumes backend endpoints dynamically using asynchronous JavaScript (fetch API), ensuring clean separation of concerns.

CORS middleware is configured to allow controlled cross-origin communication.

---
## Install
- Clone this repository
- cd Backend/app
- python -m uvicorn main:app --reload


## Technologies Used

- Python 3.10+
- FastAPI
- Uvicorn (ASGI Server)
- RESTful API design
- JSON-based responses
- HTML5
- CSS3 (Bootstrap)
- Vanilla JavaScript (Async/Await, Fetch API)

### DevOps 
- Docker (containerization)
- GitHub Actions (CI/CD pipeline)
- Deployment on Render (backend)
- GitHub Pages (frontend)


### Others

The frontend dynamically requests language-specific content from the API based on user preference, without requiring page reload.

This demonstrates:
- Dynamic content rendering
- Clean API contract design
- Structured JSON organization for localization

---

### Strategies

To ensure availability, the frontend includes a fallback mechanism:

If the API is in a "cold start" state or temporarily unavailable, the application loads internal hardcoded JSON data as a backup.

This guarantees continuous user experience and prevents interface breakdown.

This approach reflects:
- Defensive frontend design
- Resilience engineering principles
- User-focused availability strategy

---

All portfolio data (projects, skills, profile information) is served through structured JSON endpoints.

Benefits:
- Easy content updates without changing frontend structure
- Clear API contract
- Separation between data and presentation
- Scalable architecture


The project is being enhanced with:

- Docker containerization
- GitHub Actions pipeline for automated build and testing
- Continuous deployment to Render
- Static frontend hosting on GitHub Pages

This ensures:
- Automated validation
- Version control consistency
- Deployment reliability

---

## Goals

This project was designed to demonstrate:

- API-first development mindset
- Clean frontend/backend separation
- Asynchronous programming
- Resilience patterns
- Deployment automation practices


# LICENÇA
Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Desenvolvido por Clarissa Pires
