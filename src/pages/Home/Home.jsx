import mainLogo from "../../assets/UniversalHTSLogo.png";
import "./Home.styles.css";
import voteTom from "../../assets/htsVGT.png";
import merchTom from "../../assets/htsSM.png";
import moreInfo from "../../assets/htsLM.png";
import restTom from "../../assets/htsRS.png";

import Rankings from "../../components/Rankings/Rankings";
import GoldTomCS from "../../components/GoldTomCS/GoldTomCS";
export function Home() {
  return (
    <div className="comingSoonPage">
      <div className="textContainerHomePage">
        <p>
          Duke's Hot Tomato Summer is here - July 18-28!<br></br> 2024 promises
          to be hotter than ever with over 350 restaurants participating across
          6 cities <br></br> Charleston, SC; Charlotte, NC; Greenville, SC;
          Knoxville, TN; Raleigh, NC; Richmond, VA.<br></br> Learn more below.
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
            href="https://dukesmayo.com/collections/merchandise"
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
          <a href="https://dukesmayo.com/" target="_blank">
            <img src={moreInfo} alt="drawing of tomato" className="tomImg" />
          </a>
        </div>
      </div>
      <GoldTomCS />
      <div className="rankingDiv">
        <Rankings />
      </div>
    </div>
  );
}
