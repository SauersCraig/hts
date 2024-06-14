import { useState, useContext } from "react";
import { supabase } from "../../client";
import { RestContext } from "../../RestContext";
import "./Voting.styles.css";
export function Voting() {
  const [inputSearch, setInputSearch] = useState("");
  const { resName, rests } = useContext(RestContext);
  const { voted, setVoted } = useState(true);
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
      setVoted(true);
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
            <div className="restGTContainer">
              <p className="restGTName">{restName.name}</p>

              <button
                onClick={() => onClickVote(restName.id, restName.votes)}
                className="restGTBtn"
              >
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
      <div>
        <p className="ctaVoting">
          Use the search bar to find your favorite restaurant, then cast your
          vote.
        </p>
        <input
          type="text"
          placeholder="Search Restaurant Name"
          onChange={inputHandler}
          className="goldTomInput"
        />

        {restPick()}
        {filteredrests.slice(0, 5).map((i) => (
          <div key={i.id} className="restGTContainer">
            <p className="restGTName">{i.name}</p>

            <button
              onClick={() => onClickVote(i.id, i.votes)}
              className="restGTBtn"
            >
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
