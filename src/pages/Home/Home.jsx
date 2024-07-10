import mainLogo from "../../assets/UniversalHTSLogo.png";
import "./Home.styles.css";
import voteTom from "../../assets/htsVGT.png";
import merchTom from "../../assets/htsSM.png";
import moreInfo from "../../assets/htsLM.png";
import restTom from "../../assets/htsRS2.png";

import Rankings from "../../components/Rankings/Rankings";
import GoldTomCS from "../../components/GoldTomCS/GoldTomCS";
import ReactGA from "react-ga";
export function Home() {
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="comingSoonPage">
      <div className="textContainerHomePage">
        <h3>
          Duke's Hot Tomato Summer is here! <br></br> July 18<sup>th</sup>-28
          <sup>th</sup>
        </h3>
        <p>
          2024 promises to be hotter than ever with over 330 restaurants
          participating across 6 cities <br></br> Charleston, SC; Charlotte, NC;
          Greenville, SC;<br></br> Knoxville, TN; Raleigh, NC; Richmond, VA.
          <br></br>
          Learn more below.
        </p>
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
      <GoldTomCS />
      {/* <div className="rankingDiv">
        <Rankings />
      </div> */}
    </div>
  );
}
