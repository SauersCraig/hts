import "./GoldTomCS.styles.css";

import Can from "../../assets/HTS-gif-can.gif";
import Jar from "../../assets/HTS-gif-Jar-Tom.gif";
import GoldTom from "../../assets/goldtomato.png";
function GoldTomCS() {
  return (
    <div className="goldTomCSContainer">
      <div className="gifCS">
        <img src={Can} alt="a yellow can with a bright red tomato bouncing up and down" />
      </div>
      <img src={GoldTom} alt="Giant Golden Tomator" className="goldTomCSHP" />
      <div className="textSecGTCS">
        <h1 className="gtcsHeader">Golden Tomato Award</h1>
        <p className="secLineGTCS">voting coming soon</p>
      </div>
      <div className="gifCS">
        <img src={Jar} alt="a bright red tomato and a jar of dukes spilling out bouncing up and down" />
      </div>
    </div>
  );
}

export default GoldTomCS;
