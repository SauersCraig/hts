import mainLogo from "../../assets/UniversalHTSLogo.png";
import "./Home.styles.css";

export function Home() {
  return (
    <div className="comingSoonPage">
      <h1>Hot Tomato Summer</h1>
      <a href="/Downloadables">Downloadables</a> <br></br>
      <br></br>
      <a href="https://dukesmayo.com/pages/htsreg">
        Sign up for Hot Tomato Summer
      </a>
      <br></br>
      <img src={mainLogo} alt="Hot Tomato Summer Logo" />
    </div>
  );
}
