import mainLogo from "../../assets/UniversalHTSLogo.png";
import "./Home.styles.css";
import tomato from "../../assets/HTS-tomato.png";
export function Home() {
  return (
    <div className="comingSoonPage">
      <div className="tomLinkDiv">
        <img src={tomato} alt="drawing of tomato" className="tomImg" />
        <a href="/GoldenTomato" className="homeLink">
          VOTE
        </a>
      </div>
      <h1 className="comingSoon">Coming Soon Hot Tomato Summer</h1>
      <a
        href="https://dukesmayo.com/pages/htsreg"
        className="htsLink"
        target="_blank"
      >
        Sign Up for Hot Tomato Summer
      </a>
      <img src={mainLogo} className="homeLogo" />
    </div>
  );
}
