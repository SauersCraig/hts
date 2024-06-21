import mainLogo from "../../assets/UniversalHTSLogo.png";
import "./Downloadables.styles.css";
import Reel from "../../assets/HotTomatoSummerReel.mp4";
import HTSLogo from "../../assets/HTSLogo (png).png";
import HTSLogo2 from "../../assets/HTSLogo2 (png).png";
import HTSLogo3 from "../../assets/HTSLogo3.png";
import HTSLogo4 from "../../assets/HTSLogo4.png";
import HTSLogoSocialPost from "../../assets/HTSLogoSocialPost.jpg";
import HTSLogoSocialPost2 from "../../assets/HTSLogoSocialPost2.jpg";
export function Downloadables() {
  return (
    <div className="comingSoonPage">
      <h1 className="comingSoon">Duke’s Hot Tomato Summer Assets</h1>
      <p className="secondLine">
        Download the assets below for use on social media, custom menu design,
        and more during Hot Tomato Summer. If you have any questions, please
        email dukeshts@sauerbrands.com.
      </p>

      <div className="downloadContainer">
        <div className="cardContainer">
          <div className="downloadCard">
            <img src={HTSLogo} className="downloadImg"></img>
            <p>Hot Tomato Summer Logo with date (.png) </p>
            <a href="/assets/HTSLogo%20(png)-DK7Dw7ck.png" download>
              Download
            </a>
          </div>
        </div>
        <div className="cardContainer">
          <div className="downloadCard">
            <img src={HTSLogo2} className="downloadImg"></img>
            <p>Hot Tomato Summer Logo without date (.png) </p>
            <a href="/assets/HTSLogo2%20(png)-Bn1_X17a.png" download>
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
            <a href="/assets/HTSLogo4-DRJqUVif.png" download>
              Download
            </a>
          </div>
        </div>
        <div className="cardContainer">
          <div className="downloadCard">
            <img src={HTSLogoSocialPost} className="downloadImg"></img>
            <p>Hot Tomato Summer social post (.jpg) </p>
            <a href="/assets/HTSLogoSocialPost-BRSmX3fr.jpg" download>
              Download
            </a>
          </div>
        </div>
        <div className="cardContainer">
          <div className="downloadCard">
            <img src={HTSLogoSocialPost2} className="downloadImg"></img>
            <p>Hot Tomato Summer social post version 2 (.jpeg) </p>
            <a href="/assets/HTSLogoSocialPost2-kbBQGmK0.jpg" download>
              Download
            </a>
          </div>
        </div>
        <div className="cardContainer">
          <div className="downloadCard">
            <video width="auto" height="auto" autoplay loop>
              <source src={Reel} type="video/mp4"></source>
            </video>
            <p>Hot Tomato Summer Reel (.mp4) </p>
            <a href="/assets/HotTomatoSummerReel-DFA81biD.mp4" download>
              Download
            </a>
          </div>
        </div>
        <div></div>
        <a
          href="https://dukesmayo.com/pages/htsreg"
          className="htsLink"
          target="_blank"
        >
          Sign Up for Hot Tomato Summer
        </a>
      </div>
    </div>
  );
}
