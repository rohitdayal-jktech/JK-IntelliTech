//frontend/src/components/RecipeForm.js
import React, { useState } from "react";
import axios from "axios";

const RecipeForm = ({ setRecipes }) => {
  const [form, setForm] = useState({ title: "", category: "", instructions: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/api/recipes", form);
    setRecipes(prev => [...prev, res.data]);
    setForm({ title: "", category: "", instructions: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Recipe</h2>
      <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
      <textarea placeholder="Instructions" value={form.instructions} onChange={e => setForm({ ...form, instructions: e.target.value })} />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
 