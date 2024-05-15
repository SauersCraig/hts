import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { supabase } from "./client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Restaurants } from "./pages/Restaurants/Restaurants";
import { Home } from "./pages/Home/Home";
import { GoldenTomato } from "./pages/GoldenTomato/GoldenTomato";
function App() {
  const [session, setSession] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const { data } = await supabase.from("Restaurants").select();
    setRestaurants(data);
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      console.log(session.user.id);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <>
        <Home />
        <Auth
          supabaseClient={supabase}
          localization={{
            variables: {
              sign_in: {
                email_label: "Your email address",
                password_label: " strong password",
                display_name_label: "User Name",
              },
            },
          }}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
        />
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Restaurants"
          element={<Restaurants restaurants={restaurants} />}
        />
        <Route
          path="/GoldenTomato"
          element={<GoldenTomato session={session} />}
        />
      </Routes>
    );
  }
}

export default App;
