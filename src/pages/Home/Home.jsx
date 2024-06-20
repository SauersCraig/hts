import mainLogo from "../../assets/UniversalHTSLogo.png";
import "./Home.styles.css";
import Reel from "../../assets/HotTomatoSummerReel.mp4";
import HTSLogo from "../../assets/HTSLogo (png).png";
import HTSLogo2 from "../../assets/HTSLogo2 (png).png";
import HTSLogo3 from "../../assets/HTSLogo3.png";
import HTSLogo4 from "../../assets/HTSLogo4.png";
import HTSLogoSocialPost from "../../assets/HTSLogoSocialPost.jpg";
import HTSLogoSocialPost2 from "../../assets/HTSLogoSocialPost2.jpg";
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
