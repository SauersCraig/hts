import mainLogo from "../../assets/UniversalHTSLogo.png";
import "./Home.styles.css";
import voteTom from "../../assets/hts-buttons-02.png";
import merchTom from "../../assets/hts-buttons-04.png";
import moreInfo from "../../assets/hts-buttons-03.png";
import restTom from "../../assets/hts-buttons-01.png";

import Rankings from "../../components/Rankings/Rankings";
export function Home() {
  return (
    <div className="comingSoonPage">
      <div className="tomContainer">
        <div className="tomLinkDiv">
          <a href="/GoldenTomato">
            <img src={voteTom} alt="drawing of tomato" className="tomImg" />
          </a>
        </div>

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
          <a href="https://dukesmayo.com/" target="_blank">
            <img src={moreInfo} alt="drawing of tomato" className="tomImg" />
          </a>
        </div>
      </div>
      <Rankings />
    </div>
  );
}
