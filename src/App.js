import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { DataProvider } from "./Context/dataContext";
import { UserProvider } from "./Context/userContext";
import Recipe from "./Pages/Recipe/Recipe";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/recipe/" exact element={<Search />} />
            <Route path="/recipe/:id" exact element={<Recipe />} />
          </Routes>
        </UserProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
