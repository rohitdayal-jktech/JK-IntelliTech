# 🍲 Food Recipe Book Backend

This is the backend for a simple food recipe book application built with **FastAPI**.

## 🚀 Features

-  FastAPI-based REST API
-  `/` health check endpoint
-  `/api/recipes` sample API Recipes response



## ▶️ How to Run

1. Clone the repo  
2. Create a virtual environment  
3. Install dependencies  
4. Start the FastAPI server

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn backend.main:app --reload
