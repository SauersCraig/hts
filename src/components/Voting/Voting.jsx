import { useState, useContext } from "react";
import { supabase } from "../../client";
import { RestContext } from "../../RestContext";
export function Voting() {
  const [inputSearch, setInputSearch] = useState("");
  const { resName, rests } = useContext(RestContext);

  const [restName, setRestName] = resName;
  const [restaurants, setRestaurants] = rests;

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
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputSearch(lowerCase);
  };

  const filteredrests = restaurants.filter((el) => {
    //if no input the return the original
    if (inputSearch === "") {
      return;
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(inputSearch);
    }
  });
  function restPick() {
    if (inputSearch === "") {
      return (
        <div>
          {restName && (
            <div>
              <p>{restName.name}</p>
              {restName.votes > 0 ? (
                <p>{restName.votes}</p>
              ) : (
                <p>No votes yet</p>
              )}
              <button onClick={() => onClickVote(restName.id, restName.votes)}>
                Vote
              </button>
            </div>
          )}
        </div>
      );
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search Restaurants"
        onChange={inputHandler}
      />
      {restPick()}
      {filteredrests.slice(0, 5).map((i) => (
        <div key={i.id}>
          <p>{i.name}</p>
          {i.votes > 0 ? <p>{i.votes}</p> : <p>No votes yet</p>}
          <button onClick={() => onClickVote(i.id, i.votes)}>Vote</button>
        </div>
      ))}
    </div>
  );
}
