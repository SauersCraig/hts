import { useState, useEffect, createContext, useContext, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { supabase } from "./client";
import { RestContext } from "./RestContext";
import ReactGA from "react-ga";

import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { Restaurants } from "./pages/Restaurants/Restaurants";
import { Home } from "./pages/Home/Home";
import { Downloadables } from "./pages/Downloadables/Downloadables";
import { GoldenTomato } from "./pages/GoldenTomato/GoldenTomato";
import { ResetPassword } from "./pages/ResetPassword/ResetPassword";
import Rest from "./pages/Reset/Rest";

import { NavBar } from "./components/NavBar/NavBar";
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
    <>
      <h1>Duke's Mayo Dev Site.</h1>{" "}
      <h2>Nothing to see here move on please!!</h2>
    </>
  );
}

export default App;
