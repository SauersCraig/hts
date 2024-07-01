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

  return (
    <div>
      <button className="accordion-item" onClick={() => setIsActive(!isActive)}>
        <div className="topAccordion">
          <div className="headerContainer">
            <h2 className="headerAccordion">{i.name}</h2>
          </div>

          <img
            className="arrowIcon"
            src={isActive ? upIcon : downIcon}
            alt={isActive ? "Arrow Icon Pointed Up" : "Arrow Icon Pointed Down"}
          />
        </div>
      </button>

      {isActive && (
        <div className="infoAccordion accordionDivide">
          <div className="containerInfoSection">
            <div className="specContainer">
              <h2>Special</h2>

              <div className="infoAccordion">
                {i.specialObj ? (
                  <div>
                    {i.specialObj.map((item) => (
                      <div key={item.name}>
                        <h3>{item.name}</h3>
                        <p>{item.desc}</p>
                      </div>
                    ))}
                  </div>
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
            {i.address ? (
              <a
                href={`https://www.google.com/maps/place/${i.address}`}
                className="btnHTS"
                target="_blank"
              >
                Directions
              </a>
            ) : (
              <div></div>
            )}

            {i.website ? (
              <a href={i.website} target="_blank" className="btnHTS">
                Website
              </a>
            ) : (
              <div></div>
            )}

            <button onClick={() => handleRouteChange(i)} className="btnHTS">
              Vote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
