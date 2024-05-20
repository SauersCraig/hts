import "./RestSection.styles.css";
import { supabase } from "../../client";

export function RestSection({ rests }) {
  const restaurants = rests.sort((a, b) => a.votes - b.votes);
  const restBackwards = restaurants.reverse();

  console.log(restBackwards);
  async function updateVotes(id, vote) {
    const { data, error } = await supabase
      .from("Restaurants")
      .update({ votes: vote })
      .eq("id", id)
      .select();
    if (error) {
      console.error(error);
    } else {
      console.log(vote);
      window.location.reload();
    }
  }

  function onClickVote(id, votes) {
    let vote = votes + 1;
    updateVotes(id, vote);
  }
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

            <button onClick={() => onClickVote(i.id, i.votes)}>Vote</button>
            {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
