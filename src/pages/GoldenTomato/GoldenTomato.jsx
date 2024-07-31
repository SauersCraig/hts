import "./GoldenTomato.styles.css";

import GoldTom from "../../assets/goldTomTrophy.png";
import ReactGA from "react-ga";
export function GoldenTomato() {
  ReactGA.pageview(window.location.pathname + window.location.search);

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
