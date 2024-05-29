import "./RestSection.styles.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RestContext } from "../../RestContext";

export function RestSection({ rests }) {
  const { restName, setRestName } = useContext(RestContext);
  const restaurants = rests.sort((a, b) => a.votes - b.votes);
  const restBackwards = restaurants.reverse();

  let navigate = useNavigate();
  const handleRouteChange = (item) => {
    let rest = item;
    setRestName(rest);
    let path = "/GoldenTomato";
    navigate(path);
  };
  return (
    <div className="restContainer">
      {restBackwards.map((i) => (
        <div key={i.id} className="restCard">
          <div>
            <h1>{i.name}</h1>
            <p>{i.address}</p>
            <a href={i.website}>{i.website}</a>
          </div>
          <div>
            <p>Special HTS Dish</p>
            {i.specialName ? (
              <div>
                <p>{i.specialName}</p>
                <p>{i.special}</p>
              </div>
            ) : (
              <p>Specials Coming Soon</p>
            )}
            <button onClick={() => handleRouteChange(i)}>Vote</button>
            {/* <a href="GoldenTomato">Vote</a> */}
            {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
