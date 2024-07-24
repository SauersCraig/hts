import "./Restaurants.styles.css";
import { useState, useContext, useEffect } from "react";
import { RestSection } from "../../components/RestSection/RestSection";
import { RestContext } from "../../RestContext";
import Accordion from "../../components/Accordion/Accordion";
import ReactGA from "react-ga";
import Rankings from "../../components/Rankings/Rankings";
export function Restaurants() {
  ReactGA.pageview(window.location.pathname + window.location.search);
  const { rests } = useContext(RestContext);
  const [rest, setRest] = useState();
  const [newDate, setNewDate] = useState();
  const [inputSearch, setInputSearch] = useState("");
  const [restaurants, setRestaurants] = rests;
  const [city, setCity] = useState("");

  useEffect(() => {
    const today = new Date();
    console.log(today);
    const date = today.getDate();
    setNewDate(date);
  }, []);

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
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputSearch(lowerCase);
  };
  const filteredrestaurants = restaurants.filter((el) => {
    //if no input the return the original
    if (inputSearch === "") {
      return;
    }

    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(inputSearch);
    }
  });

  //return the item which contains the user input

  return (
    <div>
      <div className="infoRest">
        <p>
          Click on your city of choice to find local participating restaurants.
          Search for a restaurant in your city using the search bar or scroll to
          find restaurants listed in alphabetical order.
        </p>
        <p>
          Click on the arrow next to the restaurant to find Hot Tomato Summer
          specials and restaurant information (including website and
          directions). Hot Tomato Summer specials are subject to change. Please
          check with the restaurant to confirm.
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
      <div className="searchContainer">
        <p className="ctaVoting">
          Use the search bar to find your favorite restaurant.
        </p>
        <input
          type="text"
          placeholder="Search Restaurant Name"
          onChange={inputHandler}
          className="restTomInput"
        />

        {filteredrestaurants.slice(0, 5).map((i) => (
          <div key={i.id} className="restCard">
            <Accordion i={i} newDate={newDate} />
          </div>
        ))}
      </div>
      <div>
        {rest ? (
          <div>
            <RestSection rests={rest} />
          </div>
        ) : (
          <RestSection rests={restaurants} />
        )}
      </div>
      <Rankings />
    </div>
  );
}
