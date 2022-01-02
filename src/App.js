import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { DataProvider } from "./Context/dataContext";
import { UserProvider } from "./Context/userContext";
// import "./styles/myStyle.css";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </UserProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
