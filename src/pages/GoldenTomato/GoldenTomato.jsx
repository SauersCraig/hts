import { useState, useEffect } from "react";
import { Voting } from "../../components/Voting/Voting";

export function GoldenTomato({ session, restaurants }) {
  const Richmond = "Richmond, VA";
  const Charleston = "Charleston, SC";
  const Raleigh = "Raleigh, NC (Includes Triangle- Raleigh/Durham/Chapel Hill)";
  const Greenville = "Greenville, SC";
  const Charlotte = "Charlotte, NC";
  const Knoxville = "Knoxville, TN";

  const rests = restaurants.sort((a, b) => a.votes - b.votes);
  const restBackwards = rests.reverse();

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

  return (
    <div>
      <h1>Hello From Golden Tomato </h1>
      {session ? <Voting rests={restaurants} /> : <p>Log in</p>}
      <div>
        <h1>Richmond Ranking</h1>
        {filteredRichmond.slice(0, 5).map((i) => (
          <div key={i.id}>
            <p>{i.name}</p>
            {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        ))}
      </div>
      <div>
        <h1>Charleston Ranking</h1>
        {filteredCharleston.slice(0, 5).map((i) => (
          <div key={i.id}>
            <p>{i.name}</p>
            {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        ))}
      </div>
      <div>
        <h1>Raleigh Ranking</h1>
        {filteredRaleigh.slice(0, 5).map((i) => (
          <div key={i.id}>
            <p>{i.name}</p>
            {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        ))}
      </div>
      <div>
        <h1>Greenville Ranking</h1>
        {filteredGreenville.slice(0, 5).map((i) => (
          <div key={i.id}>
            <p>{i.name}</p>
            {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        ))}
      </div>
      <div>
        <h1>Charlotte Ranking</h1>
        {filteredCharlotte.slice(0, 5).map((i) => (
          <div key={i.id}>
            <p>{i.name}</p> {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        ))}
      </div>
      <div>
        <h1>Knoxville Ranking</h1>
        {filteredKnoxville.slice(0, 5).map((i) => (
          <div key={i.id}>
            <p>{i.name}</p> {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
