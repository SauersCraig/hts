import { useState, useContext, useEffect } from "react";
import { supabase } from "../../client";
import { RestContext } from "../../RestContext";
import "./Voting.styles.css";
export function Voting({ userInfo, newDate }) {
  const [inputSearch, setInputSearch] = useState("");

  const { resName, rests } = useContext(RestContext);

  const [restName, setRestName] = resName;
  const [restaurants, setRestaurants] = rests;

  async function updateVotes(id, vote) {
    if (userInfo.vote_date >= newDate) {
      alert("You have already voted today!!");
    } else {
      const { data, error } = await supabase
        .from("Restaurants")
        .update({ votes: vote })
        .eq("id", id)
        .select();
      if (error) {
        console.error(error);
      } else if (data) {
        console.log(data);
        window.location.reload();
      }
    }
  }
  async function updateUserVoteDate(id, vote) {
    const { data, error } = await supabase
      .from("profile")
      .update({ vote_date: newDate })
      .eq("id", userInfo.id)
      .select();
    if (error) {
      console.error(error);
    } else if (data) {
      updateVotes(id, vote);
      console.log("user Updated:", newDate);
    }
  }
  function onClickVote(id, votes) {
    let vote = votes + 1;
    updateUserVoteDate(id, vote);
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
              {restName.id === 305 ? (
                ""
              ) : (
                <button
                  onClick={() => onClickVote(restName.id, restName.votes)}
                  className="restGTBtn"
                  aria-label={restName.name}
                >
                  Vote
                </button>
              )}
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

            {i.id === 305 ? (
              <p>Not eligible for Golden Tomato</p>
            ) : (
              <button
                onClick={() => onClickVote(i.id, i.votes)}
                className="restGTBtn"
                aria-label={i.name}
              >
                Vote
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
