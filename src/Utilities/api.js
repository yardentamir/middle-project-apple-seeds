const axios = require("axios").default;

const options = {
  method: "GET",
  url: "https://random-recipes.p.rapidapi.com/ai-quotes/15",
  headers: {
    "x-rapidapi-host": "random-recipes.p.rapidapi.com",
    "x-rapidapi-key": "324986073amsheb4b1761cee33bap1a6db6jsn26e8c3131db9",
  },
};

export const getRandomRecipes = async () => {
  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
