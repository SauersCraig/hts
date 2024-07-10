import "./RestSection.styles.css";
import { useState, useContext, useEffect } from "react";

import { RestContext } from "../../RestContext";
import Accordion from "../Accordion/Accordion";
export function RestSection({ rests }) {
  const { resName } = useContext(RestContext);
  const [restName, setRestName] = resName;
  const [newDate, setNewDate] = useState();
  const restaurants = rests.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  useEffect(() => {
    const today = new Date();
    console.log(today);
    const date = today.getDate();
    setNewDate(date);
  }, []);
  
  return (
    <div className="restContainer">
      {restaurants.map((i) => (
        <div key={i.id} className="restCard">
          <Accordion i={i} newDate={newDate} />
        </div>
      ))}
    </div>
  );
}
