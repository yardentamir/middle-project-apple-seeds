import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://random-recipes.p.rapidapi.com/ai-quotes/15",
//   headers: {
//     "x-rapidapi-host": "random-recipes.p.rapidapi.com",
//     "x-rapidapi-key": "324986073amsheb4b1761cee33bap1a6db6jsn26e8c3131db9",
//   },
// };

// export const getRandomRecipes = async () => {
//   return axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };

const apiURL = "https://api.edamam.com/search?q=";
const apiKey = "&app_key=37cd8d5d46ed6cdbf21f4dfbea7f3aff";
const apiId = "&app_id=d02cac84";
const maxTime = "&time=30";
const maxIngreds = `&ingr=10`;

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
  console.log(recipes);
  return recipes;
};

fetchRecipesIngredients("eggs", "carrots");

export const getRandomRecipes = async () => {
  const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
  const res = await axios.get(url);
  const recipes = res.data;
  console.log(recipes);
  return recipes;
};
