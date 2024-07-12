import "./GoldTomCS.styles.css";

import GoldTom from "../../assets/goldTomTrophycrop.png";
function GoldTomCS() {
  return (
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
  );
}

export default GoldTomCS;
