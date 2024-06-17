import "./GoldenTomato.styles.css";
import { Voting } from "../../components/Voting/Voting";
import { Login } from "../../components/Login/Login";
import Rankings from "../../components/Rankings/Rankings";
import { useState, useEffect } from "react";
import { supabase } from "../../client";

export function GoldenTomato() {
  const [token, setToken] = useState(false);
  const [userInfo, setUserInfo] = useState();
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setToken(false);
  }
  let name = token ? token.user.user_metadata.first_name : "";
  return (
    <div>
      {token ? (
        <div className="gtContainer" id="JumpHere">
          <h1 className="gtHeader">
            Hello {name}! Enjoying Hot Tomato Summer?<br></br> Vote for your
            favorite restaurant to win the Golden Tomato Award.
          </h1>
          <Voting />
          <div className="signOutContainer">
          <button onClick={() => signOut()} className="signOutBtn">
           
            Sign Out
          </button> </div>
        </div>
      ) : (
        <Login setToken={setToken} />
      )}
      <Rankings />
    </div>
  );
}
