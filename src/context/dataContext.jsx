import { createContext, useState, useEffect } from "react";
import { getRandomRecipes } from "../Utilities/api";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setCurrentUser] = useState();

  useEffect(() => {
    const getData = async () => {
      setCurrentUser(await getRandomRecipes());
    }
    getData();
  }, [])

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  )
}
