import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { supabase } from "./client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

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
  async function updateVotes(id, vote) {
    const { data, error } = await supabase
      .from("Restaurants")
      .update({ votes: vote })
      .eq("id", id)
      .select();
    if (error) {
      console.error(error);
    } else {
      console.log(vote);
      window.location.reload();
    }
  }

  function onClickVote(id, votes) {
    let vote = votes + 1;
    updateVotes(id, vote);
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
    );
  } else {
    return (
      <>
        <button onClick={() => setSession(null)}>Log Out</button>
        {restaurants.map((i) => (
          <div key={i.id}>
            <p>{i.name}</p>
            <p>{i.address}</p>

            <p>{i.city}</p>
            {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
            <button onClick={() => onClickVote(i.id, i.votes)}>Vote</button>
          </div>
        ))}
      </>
    );
  }
}

export default App;
