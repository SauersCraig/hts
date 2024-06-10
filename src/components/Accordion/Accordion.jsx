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
      <div >
        <h2>{i.name}</h2>
        {isActive && (
          <div>
            <p>{i.address}</p>
            <a href={i.website}>{i.website}</a> <br></br>
            <button onClick={() => handleRouteChange(i)}>Vote</button>
            {/* <a href="GoldenTomato">Vote</a> */}
            {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        )}
      </div>
      <div>
        <div className="specContainer">
          <h2 className="specHeader">Specials</h2>
          <div>
            <img src={isActive ? upIcon : downIcon} className="arrowIcon" />
          </div>
        </div>
        {isActive && (
          <div>
            {i.specialName ? (
              <div>
                <p>{i.specialName}</p>
                <p>{i.special}</p>
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
