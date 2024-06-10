import "./RestSection.styles.css";
import { useContext } from "react";

import { RestContext } from "../../RestContext";
import Accordion from "../Accordion/Accordion";
export function RestSection({ rests }) {
  const { resName } = useContext(RestContext);
  const [restName, setRestName] = resName;
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

  
  return (
    <div className="restContainer">
      {restaurants.map((i) => (
        <div key={i.id} className="restCard">
          <Accordion i={i} />
        </div>
      ))}
    </div>
  );
}
