import "./RestSection.styles.css";
import { supabase } from "../../client";

export function RestSection({ rests }) {
  const restaurants = rests.sort((a, b) => a.votes - b.votes);
  const restBackwards = restaurants.reverse();

  return (
    <div className="restContainer">
      {restBackwards.map((i) => (
        <div key={i.id} className="restCard">
          <div>
            <p>{i.name}</p>
            <p>{i.address}</p>
            <a href={i.website}>{i.website}</a>
          </div>
          <div>
            <p>Special HTS Dish</p>
            {i.specials ? <p>{i.specials}</p> : <p>Specials Coming Soon</p>}

            <a href="GoldenTomato">Vote</a>
            {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
