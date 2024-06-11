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
    let path = "/GoldenTomato";
    navigate(path);
  };

  return (
    <div className="accordion-item" onClick={() => setIsActive(!isActive)}>
      <div>
        <h2 className="headerAccordion">{i.name}</h2>
        {isActive && (
          <div className="infoAccordion">
            {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
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
        )}
      </div>
      <div className="rightDiv">
        <div className="specContainer">
          {i.specialName ? (
            <h2 className="specHeader">Special</h2>
          ) : (
            <h2 className="specHeader">Special Coming Soon</h2>
          )}

          <div>
            <img src={isActive ? upIcon : downIcon} className="arrowIcon" />
          </div>
        </div>
        {isActive && (
          <div className="infoAccordion">
            {i.specialName ? (
              <div>
                <h3>{i.specialName}</h3>
                <p className="">{i.special}</p>
              </div>
            ) : (
              <p>Specials Coming Soon</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
