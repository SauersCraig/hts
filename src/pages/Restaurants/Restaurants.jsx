import "./Restaurants.styles.css";
import { useState, useContext } from "react";
import { RestSection } from "../../components/RestSection/RestSection";
import { RestContext } from "../../RestContext";
import ReactGA from "react-ga";
export function Restaurants() {
  ReactGA.pageview(window.location.pathname + window.location.search);
  const { rests } = useContext(RestContext);
  const [rest, setRest] = useState();
  const [restaurants, setRestaurants] = rests;
  const [city, setCity] = useState("");
  function onCityClick(city) {
    const filterByCity = restaurants.filter(
      (restaurants) => restaurants.city == city
    );

    setRest(filterByCity);
    setCity(city);
  }

  const Richmond = "Richmond, VA";
  const Charleston = "Charleston, SC";
  const Raleigh = "Raleigh, NC (Includes Triangle- Raleigh/Durham/Chapel Hill)";
  const Greenville = "Greenville, SC";
  const Charlotte = "Charlotte, NC";
  const Knoxville = "Knoxville, TN";

  return (
    <div>
      <div className="infoRest">
        <p>Click on a city to find participating restaurants</p>
        <p>
          Click on the participating restaurant name for restaurant info and to
          see their Hot Tomato Summer specials and offerings.
        </p>
      </div>
      <div className="cityBtnContainer">
        <button
          onClick={() => onCityClick(Richmond)}
          className={city === Richmond ? "activeBtn" : "cityBtn"}
        >
          Richmond
        </button>
        <button
          onClick={() => onCityClick(Greenville)}
          className={city === Greenville ? "activeBtn" : "cityBtn"}
        >
          Greenville
        </button>
        <button
          onClick={() => onCityClick(Knoxville)}
          className={city === Knoxville ? "activeBtn" : "cityBtn"}
        >
          Knoxville
        </button>
        <button
          onClick={() => onCityClick(Charlotte)}
          className={city === Charlotte ? "activeBtn" : "cityBtn"}
        >
          Charlotte
        </button>
        <button
          onClick={() => onCityClick(Charleston)}
          className={city === Charleston ? "activeBtn" : "cityBtn"}
        >
          Charleston
        </button>
        <button
          onClick={() => onCityClick(Raleigh)}
          className={city === Raleigh ? "activeBtn" : "cityBtn"}
        >
          Raleigh
        </button>
      </div>
      <div>
        {rest ? (
          <RestSection rests={rest} />
        ) : (
          <RestSection rests={restaurants} />
        )}
      </div>
    </div>
  );
}
