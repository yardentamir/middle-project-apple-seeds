import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { DataProvider } from "./context/dataContext";
import { UserProvider } from "./context/userContext";
import Recipe from "./Pages/Recipe/Recipe";
import Search from "./Pages/Search/Search";
import Favorite from "./Pages/Favorites/Favorites";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/recipe/" exact element={<Search />} />
            <Route path="/favorite/" exact element={<Favorite />} />
            <Route path="/recipe/:id" exact element={<Recipe />} />
          </Routes>
        </UserProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
