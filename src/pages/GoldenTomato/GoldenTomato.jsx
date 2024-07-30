import "./GoldenTomato.styles.css";
import { Voting } from "../../components/Voting/Voting";
import { Login } from "../../components/Login/Login";
import { ThankYou } from "../../components/ThankYou/ThankYou";
import Rankings from "../../components/Rankings/Rankings";
import BeRightBack from "../../components/BeRightBack/BeRightBack";
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import GoldTom from "../../assets/goldTomTrophy.png";
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
      <div>
        <div className="topGridGTCS">
          <div className="textItemTG">
            <h1 className="votingComingSoonHeader">The</h1>
            <h1 className="votingComingSoonHeader gtWords">Golden Tomato</h1>
            <h1 className="votingComingSoonHeader">Award</h1>
            <h1 className="votingComingSoonHeader">Winners Are:</h1>
            <div className="topGridGTCS2">
            <p>Charleston:</p>
            <p> Prohibition - 2634</p>
              <p>Charlotte:</p>
              <p> Moo&Brew - 2706</p>
          
              <p>Greenville: </p>
              <p> Clayton's Deli -2521</p>
              <p>Knoxville:</p>
              <p> Maple Hall - 896</p>
              <p>Raleigh:</p>
              <p> Abbey Road Tavern & Grill - 2057</p>
              <p>Richmond:</p>
              <p> Coco and Hazel - 4772</p>
            </div>
          </div>
          <img src={GoldTom} alt="Trophy of a lady holding up a giant Tomato" />
        </div>
      </div>
    </div>
  );
}
