import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/RecipeForm";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/recipes")
      .then(res => setRecipes(res.data));
  }, []);

  return (
    <div>
      <h1>🍽️ My Recipe Book</h1>
      <RecipeForm setRecipes={setRecipes} />
      <div>
        {recipes.map(r => <RecipeCard key={r.id} recipe={r} />)}
      </div>
    </div>
  );
};

export default Home;
 