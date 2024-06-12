import "./Rankings.styles.css";
import { useContext } from "react";
import { RestContext } from "../../RestContext";
function Rankings() {
  const { rests } = useContext(RestContext);

  const [restaurants, setRestaurants] = rests;

  const Richmond = "Richmond, VA";
  const Charleston = "Charleston, SC";
  const Raleigh = "Raleigh, NC (Includes Triangle- Raleigh/Durham/Chapel Hill)";
  const Greenville = "Greenville, SC";
  const Charlotte = "Charlotte, NC";
  const Knoxville = "Knoxville, TN";
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
  return (
    <div className="rankingContainer">
      <div className="cityContainer cityContainerNL">
        <h1>Richmond</h1>
        {richRestOrder.slice(0, 5).map((i) => (
          <div key={i.id} className="rankingRestCon">
            <p>{i.name}</p>
            {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        ))}
      </div>
      <div className="cityContainer cityContainerNL">
        <h1>Raleigh</h1>
        {raleighOrder.slice(0, 5).map((i) => (
          <div key={i.id} className="rankingRestCon">
            <p>{i.name}</p>
            {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        ))}
      </div>
      <div className="cityContainer cityContainerNL">
        <h1>Charlotte</h1>
        {charlotteOrder.slice(0, 5).map((i) => (
          <div key={i.id} className="rankingRestCon">
            <p>{i.name}</p> {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        ))}
      </div>
      <div className="cityContainer cityContainerNL">
        <h1>Charleston</h1>
        {charlestonOrder.slice(0, 5).map((i) => (
          <div key={i.id} className="rankingRestCon">
            <p>{i.name}</p> {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        ))}
      </div>
      <div className="cityContainer cityContainerNL">
        <h1>Knoxville</h1>
        {knoxvilleOrder.slice(0, 5).map((i) => (
          <div key={i.id} className="rankingRestCon">
            <p>{i.name}</p> {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        ))}
      </div>
      <div className="cityContainer">
        <h1>Greenville</h1>
        {greenvilleOrder.slice(0, 5).map((i) => (
          <div key={i.id} className="rankingRestCon">
            <p>{i.name}</p> {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rankings;
