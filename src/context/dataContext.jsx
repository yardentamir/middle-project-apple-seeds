import { createContext, useState, useEffect } from "react";
import { getRandomRecipes, } from "../Utilities/api";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setCurrentUser] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getRandomRecipes();
      setCurrentUser(data.meals[0]);

    }
    getData();
  }, [])

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  )
}
