import { useState, useEffect } from "react";
import { RestSection } from "../../components/RestSection/RestSection";
export function Restaurants({ restaurants }) {
  const [rest, setRest] = useState();

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
      <button onClick={() => onCityClick(Richmond)}>Richmond</button>
      <button onClick={() => onCityClick(Greenville)}>Greenville</button>
      <button onClick={() => onCityClick(Knoxville)}>Knoxville</button>
      <button onClick={() => onCityClick(Charlotte)}>Charlotte</button>
      <button onClick={() => onCityClick(Charleston)}>Charleston</button>
      <button onClick={() => onCityClick(Raleigh)}>Raleigh</button>
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
