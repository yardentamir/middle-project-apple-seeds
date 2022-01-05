import { createContext, useState, useEffect } from "react";
import { getRandomRecipes, fetchRecipesIngredients } from "../Utilities/api";

export const DataContext = createContext();


export function DataProvider({ children }) {
  const [randomData, setRandomApiData] = useState();
  const [EmdamamData, setEmdamamData] = useState();

  useEffect(() => {
    const getData = async () => {
      const randomResults = await getRandomRecipes();
      setRandomApiData(randomResults.meals[0]);
      const EmdamamResults = await fetchRecipesIngredients(randomResults.meals[0].strCategory);
      setEmdamamData(EmdamamResults.hits);
    }
    getData();
  }, [])

  return (
    <DataContext.Provider value={{ randomData, EmdamamData }}>{children}</DataContext.Provider>
  )
}
