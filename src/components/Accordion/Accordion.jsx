import "./Accordion.styles.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RestContext } from "../../RestContext";
import upIcon from "../../assets/icons/angle-up.svg";
import downIcon from "../../assets/icons/angle-down.svg";
function Accordion({ i }) {
  const [isActive, setIsActive] = useState(false);
  const { resName } = useContext(RestContext);
  const [restName, setRestName] = resName;
  let navigate = useNavigate();
  const handleRouteChange = (item) => {
    let rest = item;
    setRestName(rest);
    let path = "/GoldenTomato#JumpHere";
    navigate(path);
  };

  function specialObj(i) {
    console.log(i);
    {
      i.map((item) => {
        console.log(item.name);
        <p>{item.name}</p>;
      });
    }
  }
  return (
    <div>
      <div className="accordion-item" onClick={() => setIsActive(!isActive)}>
        <div className="topAccordion">
          <div className="headerContainer">
            <h2 className="headerAccordion">{i.name}</h2>
          </div>
          <img
            src={isActive ? upIcon : downIcon}
            className="arrowIcon"
            alt="Arrow Icon if Open Arrow is pointed up if closed Arrow is pointed down"
          />
        </div>
      </div>

      {isActive && (
        <div className="infoAccordion accordionDivide">
          <div className="containerInfoSection">
            <div className="specContainer">
              <h2>Special</h2>
              <div className="infoAccordion">
                {i.specialObj ? (
                  <>
                    <h3>The Garage Band - Kentucky Hot Brown</h3>
                    <p>
                      The standard open face hot mess - sourdough bread, house
                      roasted turkey breast, cheddar cheese, smothered in gravy
                      and topped with bacon
                    </p>
                    <h3>Stifler's Mom - Duke's Tomato Pie</h3>
                    <p>
                      Rawleigh's take on the classic summer pie - baked to
                      perfection
                    </p>
                  </>
                ) : (
                  <p>Specials Coming Soon</p>
                )}
              </div>
            </div>
            <div className="goldenTomAccordion">
              <h3>Votes for Golden Tomato</h3>
              {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
            </div>
          </div>
          <div className="accordionBtnContainer">
            <a
              href={`https://www.google.com/maps/place/${i.address}`}
              className="btnHTS"
              target="_blank"
            >
              Directions
            </a>

            <a href={i.website} target="_blank" className="btnHTS">
              Website
            </a>

            <a onClick={() => handleRouteChange(i)} className="btnHTS">
              Vote
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
