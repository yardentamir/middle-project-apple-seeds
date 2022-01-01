import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { DataProvider } from "./Context/dataContext";
import { UserProvider } from "./Context/userContext";
// import "./styles/myStyle.css";

function App() {
  // useEffect(() => {

  // }, []);

  return (
    <BrowserRouter>
      <Header />
      <DataProvider>
        <UserProvider>
          <Routes>
            <Route path="/" exact element={<Login />} />
            {/* <Route path="/homepage" exact element={<Home />} /> */}
          </Routes>
        </UserProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
