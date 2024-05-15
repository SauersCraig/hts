import mainLogo from "../../assets/UniversalHTSLogo.png";
import "./Home.styles.css";

export function Home() {
  return (
    <div className="comingSoonPage">
      <p className="comingSoon">Coming Soon Hot Tomato Summer</p>
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
