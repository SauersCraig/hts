import "./Restaurants.styles.css";
import { useState, useContext } from "react";
import { RestSection } from "../../components/RestSection/RestSection";
import { RestContext } from "../../RestContext";
export function Restaurants() {
  const { rests } = useContext(RestContext);
  const [rest, setRest] = useState();
  const [restaurants, setRestaurants] = rests;
  function onCityClick(city) {
    const filterByCity = restaurants.filter(
      (restaurants) => restaurants.city == city
    );

    setRest(filterByCity);
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
        <p>Click on your city to find participating restaurants.</p>
        <p>
          Click on the participating restaurant name for restaurant info and to
          see their Hot Tomato Summer specials and offerings.
        </p>
      </div>
      <div className="cityBtnContainer">
        <button onClick={() => onCityClick(Richmond)} className="cityBtn">
          Richmond
        </button>
        <button onClick={() => onCityClick(Greenville)} className="cityBtn">
          Greenville
        </button>
        <button onClick={() => onCityClick(Knoxville)} className="cityBtn">
          Knoxville
        </button>
        <button onClick={() => onCityClick(Charlotte)} className="cityBtn">
          Charlotte
        </button>
        <button onClick={() => onCityClick(Charleston)} className="cityBtn">
          Charleston
        </button>
        <button onClick={() => onCityClick(Raleigh)} className="cityBtn">
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
