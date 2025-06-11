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

# 🍽️ Food Recipe Book – Frontend

This is the frontend for the **Food Recipe Book** web application built using **React**. It allows users to browse, search, and add delicious recipes. It communicates with the FastAPI backend via RESTful APIs.

---

## 🚀 Features

- 🏠 **Home Page**: Displays recipe cards
- 🔍 **Search & Filter**: Filter recipes by categories (e.g., veg, dessert)
- 📝 **Add Recipe**: Form to add new recipes
- 🔗 **Routing**: Client-side routing with React Router
- 🌐 **API Integration**: Fetch data from FastAPI backend

---

## 📁 Folder Structure


frontend/
Jk-intelliTech/
├── backend/                         # 🍳 Python FastAPI backend
│   ├── main.py                      # Main FastAPI app
│   ├── recipes.json                 # JSON storage for recipes
│   ├── __init__.py
│   └── requirements.txt            # Python dependencies
│
├── frontend/                        # 🎨 React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   ├── pages/                   # Page-level components (Home, Detail, Add)
│   │   ├── App.js
│   │   ├── index.js
│   │                    
│   └── package.json                 # Node dependencies and scripts
│
├── .gitignore
├── README.md                        # Project overview (combined or separate)
└── Jk-intteliTech.pptx
 


---

## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [CSS / Tailwind (optional)]

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone <a href="https://github.com/rohitdayal-jktech" rel="noreferrer noopener" title="https://github.com/rohitdayal-jktech" target="_blank">https://github.com/rohitdayal-jktech</a>/Jk-inttelitech.git
cd food-recipe-book/frontend
 