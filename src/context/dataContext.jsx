import { createContext, useState, useEffect } from "react";
import { getRandomRecipes, fetchRecipesIngredients } from "../Utilities/api";

export const DataContext = createContext();


export function DataProvider({ children }) {
  const [randomData, setRandomApiData] = useState();
  const [EdamamData, setEmdamamData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const randomResults = await getRandomRecipes();
        setRandomApiData(randomResults.meals[0]);
        const EdamamResults = await fetchRecipesIngredients(randomResults.meals[0].strCategory);
        setEmdamamData(EdamamResults.hits);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])

  return (
    <DataContext.Provider value={{ randomData, EdamamData }}>{children}</DataContext.Provider>
  )
}
