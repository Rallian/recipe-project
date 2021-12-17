import React, { useState } from "react";

function RecipeCreate({addRecipes}) {
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients:"",
    preparation:""
  }
  const [recipe, setRecipe] = useState({...initialState})
  const handleChange = ({ target }) =>{
    setRecipe({...recipe,
    [target.name]: target.value})
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    addRecipes(recipe)
    setRecipe(initialState)
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <input 
              id="name"
              name="name"
              placeholder="Name"
              size="9"
              type="text"
              value={recipe.name}
              required={true}
              onChange={handleChange}
              />
            </td>
            <td>
              <label htmlFor="cuisine"> </label>
            <input 
            id="cuisine"
            name="cuisine"
            type="text"
            placeholder="Cuisine"
            size="9"
            value={recipe.cuisine}
            required={true}
            onChange={handleChange}
            />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input 
              id="photo"
              name="photo"
              type="url"
              placeholder="URL"
              size="9"
              value={recipe.photo}
              required={true}
              onChange={handleChange}
              />
              </td>
              <td>
                <label htmlFor="ingredients"></label>
                <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                size="9"
                value={recipe.ingredients}
                required={true}
                onChange={handleChange}
                />
                </td>
                <td>
                  <label htmlFor="preparation"></label>
                  <textarea
                  id="preparation"
                  name="preparation"
                  type="text"
                  placeholder="Preparation"
                  size="9"
                  value={recipe.preparation}
                  required={true}
                  onChange={handleChange}
                  />
                </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
