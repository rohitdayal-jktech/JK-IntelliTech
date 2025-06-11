//frontend/src/components/RecipeCard.js
import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
    <h3>{recipe.title}</h3>
    <p>Category: {recipe.category}</p>
    <Link to={`/recipes/${recipe.id}`}>View</Link>
  </div>
);

export default RecipeCard;
 