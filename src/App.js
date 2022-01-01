import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
// import "./styles/myStyle.css";
import { UserContext, RandomRecipes } from "./Context/userContext";
import { getRandomRecipes } from "./Utilities/api";
import { db } from "./Utilities/firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [user, setUser] = useState([]);
  const [dataState, setData] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const data = useMemo(() => ({ dataState, setData }), [dataState, setData]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setData(await getRandomRecipes());
    };
    getUsers();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <RandomRecipes.Provider data={{ data, setData }}>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/game" exact element={<Home />} />
        </Routes>
      </RandomRecipes.Provider>
    </BrowserRouter>
  );
}

export default App;
