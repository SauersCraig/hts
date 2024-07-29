import "./Rankings.styles.css";
import { useContext, useState, useEffect } from "react";
import { RestContext } from "../../RestContext";
import { supabase } from "../../client";
import BeRightBack from "../BeRightBack/BeRightBack";
import goldTom from "../../assets/goldTomTrophycrop.png";
import upIcon from "../../assets/icons/angle-up.svg";
import downIcon from "../../assets/icons/angle-down.svg";
function Rankings() {
  const { rests } = useContext(RestContext);

  const [restaurants, setRestaurants] = rests;
  const [displayNum, setDisplayNum] = useState(5);
  const [openNum, setOpenNum] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const [cityName, setCityName] = useState("Richmond");
  const [newDate, setNewDate] = useState();
  const Richmond = "Richmond, VA";
  const Charleston = "Charleston, SC";
  const Raleigh = "Raleigh, NC (Includes Triangle- Raleigh/Durham/Chapel Hill)";
  const Greenville = "Greenville, SC";
  const Charlotte = "Charlotte, NC";
  const Knoxville = "Knoxville, TN";
  useEffect(() => {
    const today = new Date();
    const date = today.getDate();
    setNewDate(date);
  }, []);
  const updateRest = (payload) => {
    const filterRest = restaurants.filter((i) => i.id !== payload.new.id);

    let x = [...filterRest, payload.new];

    setRestaurants(x);
  };
  const channels = supabase
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "Restaurants" },
      (payload) => {
        updateRest(payload);
      }
    )
    .subscribe();

  const openNumDD = () => {
    setOpenNum(!openNum);
  };
  const changeNum = (i) => {
    setDisplayNum(i);
    setOpenNum(!openNum);
  };
  const openCityDD = () => {
    setOpenCity(!openCity);
  };
  const changeCity = (i) => {
    setCityName(i);
    setOpenCity(!openCity);
  };
  const filteredRichmond = restaurants.filter(
    (restaurants) => restaurants.city == Richmond
  );

  const filteredCharleston = restaurants.filter(
    (restaurants) => restaurants.city == Charleston
  );

  const filteredRaleigh = restaurants.filter(
    (restaurants) => restaurants.city == Raleigh
  );

  const filteredGreenville = restaurants.filter(
    (restaurants) => restaurants.city == Greenville
  );

  const filteredCharlotte = restaurants.filter(
    (restaurants) => restaurants.city == Charlotte
  );

  const filteredKnoxville = restaurants.filter(
    (restaurants) => restaurants.city == Knoxville
  );
  const restsCharleston = filteredCharleston.sort((a, b) => a.votes - b.votes);
  const charlestonOrder = restsCharleston.reverse();

  const restsRaleigh = filteredRaleigh.sort((a, b) => a.votes - b.votes);
  const raleighOrder = restsRaleigh.reverse();

  const restsGreenville = filteredGreenville.sort((a, b) => a.votes - b.votes);
  const greenvilleOrder = restsGreenville.reverse();

  const restsRich = filteredRichmond.sort((a, b) => a.votes - b.votes);
  const richRestOrder = restsRich.reverse();

  const restsCharlotte = filteredCharlotte.sort((a, b) => a.votes - b.votes);
  const charlotteOrder = restsCharlotte.reverse();

  const restsKnoxville = filteredKnoxville.sort((a, b) => a.votes - b.votes);
  const knoxvilleOrder = restsKnoxville.reverse();

  const displayMappedCity = () => {
    if (cityName == "Richmond") {
      return (
        <div>
          {richRestOrder.slice(0, displayNum).map((i) => (
            <div key={i.id} className="rankingRestCon">
              <p>{i.name}</p>
              {i.votes > 0 ? (
                <p className="rankVotes">{i.votes}</p>
              ) : (
                <p className="rankVotes">0</p>
              )}
            </div>
          ))}
        </div>
      );
    } else if (cityName == "Raleigh") {
      return (
        <div>
          {raleighOrder.slice(0, displayNum).map((i) => (
            <div key={i.id} className="rankingRestCon">
              <p>{i.name}</p>
              {i.votes > 0 ? (
                <p className="rankVotes">{i.votes}</p>
              ) : (
                <p className="rankVotes">0</p>
              )}
            </div>
          ))}
        </div>
      );
    } else if (cityName == "Knoxville") {
      return (
        <div>
          {knoxvilleOrder.slice(0, displayNum).map((i) => (
            <div key={i.id} className="rankingRestCon">
              <p>{i.name}</p>
              {i.votes > 0 ? (
                <p className="rankVotes">{i.votes}</p>
              ) : (
                <p className="rankVotes">0</p>
              )}
            </div>
          ))}
        </div>
      );
    } else if (cityName == "Greenville") {
      return (
        <div>
          {greenvilleOrder.slice(0, displayNum).map((i) => (
            <div key={i.id} className="rankingRestCon">
              <p>{i.name}</p>
              {i.votes > 0 ? (
                <p className="rankVotes">{i.votes}</p>
              ) : (
                <p className="rankVotes">0</p>
              )}
            </div>
          ))}
        </div>
      );
    } else if (cityName == "Charlotte") {
      return (
        <div>
          {charlotteOrder.slice(0, displayNum).map((i) => (
            <div key={i.id} className="rankingRestCon">
              <p>{i.name}</p>
              {i.votes > 0 ? (
                <p className="rankVotes">{i.votes}</p>
              ) : (
                <p className="rankVotes">0</p>
              )}
            </div>
          ))}
        </div>
      );
    } else if (cityName == "Charleston") {
      return (
        <div>
          {charlestonOrder.slice(0, displayNum).map((i) => (
            <div key={i.id} className="rankingRestCon">
              <p>{i.name}</p>
              {i.votes > 0 ? (
                <p className="rankVotes">{i.votes}</p>
              ) : (
                <p className="rankVotes">0</p>
              )}
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {richRestOrder.slice(0, displayNum).map((i) => (
            <div key={i.id} className="rankingRestCon">
              <p>{i.name}</p>
              {i.votes > 0 ? (
                <p className="rankVotes">{i.votes}</p>
              ) : (
                <p className="rankVotes">0</p>
              )}
            </div>
          ))}
        </div>
      );
    }
  };
  return (
    <div className="rankingDivContainer">
      <img src={goldTom} alt="golden tomato" className="goldTom" />
      <div className="rankingContainer">
        <div className="liveRankingHeaderContainer">
          {newDate > 28 ? (
            <p className="liveRankingHeader">
              GOLDEN TOMATO AWARD LIVE VOTING NOW CLOSED
            </p>
          ) : (
            <p className="liveRankingHeader">
              GOLDEN TOMATO AWARD LIVE VOTING RESULTS
            </p>
          )}
        </div>
        <div>
          {newDate > 28 ? (
            <div className="tallyingResults">
              <h1>We are busy tallying the results</h1>
              <h2>Come back July 30th to find out the Golden Tomato Winner in your city!</h2>
            </div>
          ) : (
            <div>
              <p className="instructText">
                Select participating city from the drop down menu to see voting
                results
              </p>
              <div className="dropDownContainer">
                <div className="numDropDownContainer">
                  <div className="textDDContainer">
                    <p className={openNum ? "placeHoderDD" : ""}>{cityName} </p>
                    {openCity && (
                      <div className="dropDownOpened">
                        <p
                          onClick={() => changeCity("Richmond")}
                          className="numDisplayOpen"
                        >
                          Richmond
                        </p>
                        <p
                          onClick={() => changeCity("Charlotte")}
                          className="numDisplayOpen"
                        >
                          Charlotte
                        </p>
                        <p
                          onClick={() => changeCity("Charleston")}
                          className="numDisplayOpen"
                        >
                          Charleston
                        </p>

                        <p
                          onClick={() => changeCity("Greenville")}
                          className="numDisplayOpen"
                        >
                          Greenville
                        </p>

                        <p
                          onClick={() => changeCity("Knoxville")}
                          className="numDisplayOpen"
                        >
                          Knoxville
                        </p>
                        <p
                          onClick={() => changeCity("Raleigh")}
                          className="numDisplayOpen"
                        >
                          Raleigh
                        </p>
                      </div>
                    )}
                  </div>
                  <div onClick={() => openCityDD()}>
                    <img
                      className={openCity ? "arrowUpIconDD" : "arrowIconDD"}
                      src={openCity ? upIcon : downIcon}
                      alt={
                        openCity
                          ? "Arrow Icon Pointed Up"
                          : "Arrow Icon Pointed Down"
                      }
                    />
                  </div>
                </div>
                <div className="numDropDownContainer">
                  <div className="textDDContainer">
                    <p className={openNum ? "placeHoderDD" : ""}>
                      Top {displayNum}
                    </p>
                    {openNum && (
                      <div className="dropDownOpened">
                        <p
                          onClick={() => changeNum(5)}
                          className="numDisplayOpen"
                        >
                          Top 5
                        </p>
                        <p
                          onClick={() => changeNum(10)}
                          className="numDisplayOpen"
                        >
                          Top 10
                        </p>
                        <p
                          onClick={() => changeNum(25)}
                          className="numDisplayOpen"
                        >
                          Top 25
                        </p>
                        <p
                          onClick={() => changeNum(50)}
                          className="numDisplayOpen"
                        >
                          Top 50
                        </p>
                      </div>
                    )}
                  </div>
                  <div onClick={() => openNumDD()}>
                    <img
                      className={openNum ? "arrowUpIconDD" : "arrowIconDD"}
                      src={openNum ? upIcon : downIcon}
                      alt={
                        openNum
                          ? "Arrow Icon Pointed Up"
                          : "Arrow Icon Pointed Down"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="rankingContainerGrid">
                <div className="cityContainer">
                  <h1>
                    {cityName} - Top {displayNum}
                  </h1>
                  {displayMappedCity()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Rankings;
