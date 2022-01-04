import axios from "axios";

const apiURL = "https://api.edamam.com/search?q=";
const apiKey = "&app_key=37cd8d5d46ed6cdbf21f4dfbea7f3aff";
const apiId = "&app_id=d02cac84";
const maxTime = "&time=30";
const maxIngreds = `&ingr=20`;

export const fetchRecipesIngredients = async (...ingredients) => {
  const mappedIngreds = ingredients
    .map((ingredient, idx) => {
      if (idx < ingredients.length - 1) {
        return ingredient + "+";
      } else {
        return ingredient;
      }
    })
    .join("");

  const url = `${apiURL}${mappedIngreds}${maxIngreds}${maxTime}${apiId}${apiKey}`;
  const res = await axios.get(url);
  const recipes = res.data;
  return recipes;
};

export const getRandomRecipes = async () => {
  const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
  const res = await axios.get(url);
  const recipes = res.data;
  return recipes;
};
