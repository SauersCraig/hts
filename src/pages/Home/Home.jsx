import mainLogo from "../../assets/UniversalHTSLogo.png";
import "./Home.styles.css";
import voteTom from "../../assets/htsVGT.png";
import merchTom from "../../assets/htsSM.png";
import moreInfo from "../../assets/htsLM.png";
import restTom from "../../assets/htsRS2.png";
import { useState, useEffect } from "react";
import Rankings from "../../components/Rankings/Rankings";
import GoldTomCS from "../../components/GoldTomCS/GoldTomCS";
import ReactGA from "react-ga";
export function Home() {
  const [newDate, setNewDate] = useState();
  useEffect(() => {
    const today = new Date();
    const date = today.getDate();
    setNewDate(date);
  }, []);
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="comingSoonPage">
      <div className="textContainerHomePage">
        <h1>DUKE'S HOT TOMATO SUMMER IS HERE! </h1>
        <h2>
          July 18<sup>th</sup>-28<sup>th</sup>
        </h2>
        <div className="cityContainer">
          <p>Charleston, SC | Charlotte, NC | Greenville, SC</p>
          <p> Knoxville, TN | Raleigh, NC | Richmond, VA</p>
        </div>
        <p>2024 promises to be hotter than ever with over </p>
        <p>330 restaurants participating across 6 cities</p>
        <p>Learn more below</p>
      </div>
      <div className="tomContainer">
        <div className="tomLinkDiv">
          <a href="/Restaurants">
            <img src={restTom} alt="drawing of tomato" className="tomImg" />
          </a>
        </div>
        <div className="tomLinkDiv">
          <a
            href="https://dukesmayo.com/collections/hot-tomato-summer"
            target="_blank"
          >
            <img src={merchTom} alt="drawing of tomato" className="tomImg" />
          </a>
        </div>
        <div className="tomLinkDiv">
          <a href="/GoldenTomato">
            <img src={voteTom} alt="drawing of tomato" className="tomImg" />
          </a>
        </div>

        <div className="tomLinkDiv">
          <a
            href="https://www.instagram.com/dukes_mayonnaise/?hl=en"
            target="_blank"
          >
            <img src={moreInfo} alt="drawing of tomato" className="tomImg" />
          </a>
        </div>
      </div>
      <div>
        {newDate < 18 ? (
          <GoldTomCS />
        ) : (
          <div className="rankingDiv">
            <Rankings />
          </div>
        )}
      </div>
    </div>
  );
}
