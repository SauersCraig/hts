import "./GoldTomCS.styles.css";

import Can from "../../assets/HTS-gif-can.gif";
import Jar from "../../assets/HTS-gif-Jar-Tom.gif";
import Ballot from "../../assets/ballot.gif";
import GoldTom from "../../assets/goldtomato.png";
function GoldTomCS() {
  return (
    <div className="goldTomCSContainer">
      <div className="gifCS leftGifCon">
        <img
          src={Can}
          alt="a yellow can with a bright red tomato bouncing up and down"
          className="shakingCan"
        />
        <img
          src={Ballot}
          className="ballotBox"
          alt="A ballot box with a card with a green check mark on it."
        />
      </div>

      <div className="textSecGTCS">
        <h1 className="gtcsHeader">The</h1>
        <h1 className="gtcsHeader">Golden Tomato</h1>
        <h1 className="gtcsHeader">Award</h1>
        <p className="VCSsecLine">
          VOTING BEGINS
          <span>
            JULY 18<sup>th</sup>
          </span>
        </p>
      </div>

      <div className="gifCS">
        <img
          src={Jar}
          alt="a bright red tomato and a jar of dukes spilling out bouncing up and down"
          className="twoGifs"
        />
      </div>
    </div>
  );
}

export default GoldTomCS;
