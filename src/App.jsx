import { useState, useEffect, createContext, useContext, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { supabase } from "./client";

import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { Restaurants } from "./pages/Restaurants/Restaurants";
import { Home } from "./pages/Home/Home";
import { Downloadables } from "./pages/Downloadables/Downloadables";
import { GoldenTomato } from "./pages/GoldenTomato/GoldenTomato";
import { ResetPassword } from "./pages/ResetPassword/ResetPassword";

import { NavBar } from "./components/NavBar/NavBar";
import { RestContext } from "./RestContext";
import Footer from "./components/Footer/Footer";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [restName, setRestName] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const { data } = await supabase.from("Restaurants").select();
    setRestaurants(data);
  }

  return (
    <RestContext.Provider
      value={{
        resName: [restName, setRestName],
        rests: [restaurants, setRestaurants],
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/GoldenTomato" element={<GoldenTomato />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Downloadables" element={<Downloadables />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </RestContext.Provider>
  );
}

export default App;
