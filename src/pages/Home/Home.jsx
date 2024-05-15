import mainLogo from "../../assets/UniversalHTSLogo.png";
import "./Home.styles.css";

export function Home() {
  return (
    <div className="comingSoonPage">
      <img src={mainLogo} className="homeLogo" />
      <p className="comingSoon">Coming Soon Hot Tomato Summer</p>
    </div>
  );
}
