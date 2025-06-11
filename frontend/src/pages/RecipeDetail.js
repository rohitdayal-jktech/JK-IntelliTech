//frontend/src/pages/RecipeDetail.j
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/recipes/${id}`)
      .then(res => setRecipe(res.data));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
 