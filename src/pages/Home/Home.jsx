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
      <h1 className="comingSoon">Download All Your Hot Tomato Summer Assets</h1>

      <img src={mainLogo} className="homeLogo" />

      <a
        href="https://dukesmayo.com/pages/htsreg"
        className="htsLink"
        target="_blank"
      >
        Sign Up for Hot Tomato Summer
      </a>
      <div className="downloadContainer">
        <div className="cardContainer">
          <div className="downloadCard">
            <img src={HTSLogo} className="downloadImg"></img>
            <p>Hot Tomato Summer Logo with date (.png) </p>
            <a href="/src/assets/HTSLogo%20(png).png" download>
              Download
            </a>
          </div>
        </div>
        <div className="cardContainer">
          <div className="downloadCard">
            <img src={HTSLogo2} className="downloadImg"></img>
            <p>Hot Tomato Summer Logo without date (.png) </p>
            <a href="/src/assets/HTSLogo2%20(png).png" download>
              Download
            </a>
          </div>
        </div>
        <div className="cardContainer">
          <div className="downloadCard">
            <img src={HTSLogo3} className="downloadImg"></img>
            <p>Hot Tomato Summer Logo version 2 with date (.png) </p>
            <a href="/assets/HTSLogo3-DiwW_QUf.png" download>
              Download
            </a>
          </div>
        </div>
        <div className="cardContainer">
          <div className="downloadCard">
            <img src={HTSLogo4} className="downloadImg"></img>
            <p>Hot Tomato Summer Logo version 2 without date (.png) </p>
            <a href="/src/assets/HTSLogo4.png" download>
              Download
            </a>
          </div>
        </div>
        <div className="cardContainer">
          <div className="downloadCard">
            <img src={HTSLogoSocialPost} className="downloadImg"></img>
            <p>Hot Tomato Summer social post (.jpg) </p>
            <a href="/src/assets/HTSLogoSocialPost.jpg" download>
              Download
            </a>
          </div>
        </div>
        <div className="cardContainer">
          <div className="downloadCard">
            <img src={HTSLogoSocialPost2} className="downloadImg"></img>
            <p>Hot Tomato Summer social post version 2 (.jpeg) </p>
            <a href="/src/assets/HTSLogoSocialPost2.jpg" download>
              Download
            </a>
          </div>
        </div>
        <div className="cardContainer">
          <div className="downloadCard">
            <video width="500" height="500" autoplay loop>
              <source src={Reel} type="video/mp4"></source>
            </video>
            <p>Hot Tomato Summer Reel (mp4) </p>
            <a href="/src/assets/HotTomatoSummerReel.mp4" download>
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
