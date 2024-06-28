import "./GoldenTomato.styles.css";
import { Voting } from "../../components/Voting/Voting";
import { Login } from "../../components/Login/Login";
import { ThankYou } from "../../components/ThankYou/ThankYou";
import Rankings from "../../components/Rankings/Rankings";
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import GoldTom from "../../assets/goldtomato.png";

export function GoldenTomato() {
  const [token, setToken] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [newDate, setNewDate] = useState();
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    const today = new Date();
    const date = today.getDate();
    setNewDate(date);

    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);
  useEffect(() => {
    {
      token ? getUser() : <></>;
    }
  }, [token]);

  async function getUser() {
    let { data: profile, error } = await supabase
      .from("profile")
      .select("*")
      .eq("id", token.user.id);
    setUserInfo(profile);
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setToken(false);
    sessionStorage.clear();
    setUserInfo([]);
    location.reload();
  }

  let name = token ? token.user.user_metadata.first_name : "";
  return (
    <div>
      {token ? (
        <div>
          <div className="signOutContainer">
            <button onClick={() => signOut()} className="signOutBtn">
              Sign Out
            </button>
          </div>
          {userInfo &&
            userInfo.map((i) => (
              <div className="gtContainer" id="JumpHere" key={i.id}>
                {i.vote_date == newDate ? (
                  <ThankYou name={name} />
                ) : (
                  <>
                    <h1 className="gtHeader">
                      Hello {name}! Enjoying Hot Tomato Summer?<br></br>
                      Vote for your favorite restaurant to win the Golden Tomato
                      Award.
                    </h1>
                    <Voting userInfo={i} newDate={newDate} />
                  </>
                )}
              </div>
            ))}
        </div>
      ) : (
        <Login setToken={setToken} />
      )}
      <div className="rankingDiv">
        <Rankings />
      </div>

      <div>
        <h1 className="votingComingSoonHeader">Voting For</h1>
        <p className="VCSsecLine">the Golden Tomato Award starts July 18th.</p>
        <p className="VCSsecLine">
          Make sure to come on back and submit your vote.
        </p>
        <img src={GoldTom} alt="a giant golden tomato" className="goldTomCS" />
      </div>
    </div>
  );
}
