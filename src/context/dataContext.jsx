import { createContext, useState, useEffect } from "react";
import { getRandomRecipes, fetchRecipesIngredients } from "../Utilities/api";

export const DataContext = createContext();


export function DataProvider({ children }) {
  const [data, setData] = useState();
  const [data2, setData2] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getRandomRecipes();
      setData(data.meals[0]);
      const data2 = await fetchRecipesIngredients(data.meals[0].strCategory);
      setData2(data2.hits);
    }
    getData();
  }, [])

  return (
    <DataContext.Provider value={{ data, data2 }}>{children}</DataContext.Provider>
  )
}
