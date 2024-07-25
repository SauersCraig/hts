import "./GoldenTomato.styles.css";
import { Voting } from "../../components/Voting/Voting";
import { Login } from "../../components/Login/Login";
import { ThankYou } from "../../components/ThankYou/ThankYou";
import Rankings from "../../components/Rankings/Rankings";
import BeRightBack from "../../components/BeRightBack/BeRightBack";
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import GoldTom from "../../assets/goldTomTrophycrop.png";
import ReactGA from "react-ga";
export function GoldenTomato() {
  ReactGA.pageview(window.location.pathname + window.location.search);
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
      {newDate < 18 ? (
        <div>
          <div className="topGridGTCS">
            <div className="textItemTG">
              <h1 className="votingComingSoonHeader">The</h1>
              <h1 className="votingComingSoonHeader gtWords">Golden Tomato</h1>
              <h1 className="votingComingSoonHeader">Award</h1>
              <p className="VCSsecLine">
                VOTING BEGINS
                <span>
                  JULY 18<sup>th</sup>
                </span>
              </p>
              <p className="comeBack2Vote">
                Make sure to come on back and submit your vote!
              </p>
            </div>
            <img src={GoldTom} className="goldTomCS" alt="A golden Tomato" />
          </div>
        </div>
      ) : (
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
                          Hello, {name}! Enjoying Hot Tomato Summer?
                        </h1>
                        <h2 className="gtHeader">
                          Vote for your favorite participating restaurant!
                        </h2>
                        <h3 className="gtHeader3">
                          The restaurant with the most votes in each city will
                          win the covetd Golden Tomato Award!
                        </h3>
                        <h3 className="gtHeader3">
                          For live results, visit the hottomatosummer.com
                          homepage
                        </h3>
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
        </div>
      )} 
    </div>
  );
}
