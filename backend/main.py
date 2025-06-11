from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json

# Create a FastAPI app instance
app = FastAPI()

# Enable CORS to allow requests from any frontend (like React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all domains (for development)
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"]   # Allow all headers
)

# Helper function to load recipes from a JSON file
def load_recipes():
    with open("backend/recipes.json") as f:
        return json.load(f)

# Health check endpoint — returns basic status
@app.get("/")
def root():
    return {"message": "Hello! Server is healthy"}

# Get all recipes (GET /api/recipes)
@app.get("/api/recipes")
def get_recipes():
    return load_recipes()

# Get a specific recipe by ID (GET /api/recipes/{id})
@app.get("/api/recipes/{recipe_id}")
def get_recipe(recipe_id: int):
    recipes = load_recipes()
    for recipe in recipes:
        if recipe["id"] == recipe_id:
            return recipe
    # If recipe not found, return 404 error
    raise HTTPException(status_code=404, detail="Recipe not found")

# Add a new recipe (POST /api/recipes)
@app.post("/api/recipes")
def add_recipe(recipe: dict):
    recipes = load_recipes()
    recipe["id"] = len(recipes) + 1  # Assign a new ID
    recipes.append(recipe)
    # Save the updated recipe list back to the JSON file
    with open("backend/recipes.json", "w") as f:
        json.dump(recipes, f, indent=2)
    return recipe
