import { useState } from "react";
import { supabase } from "../../client";

export function Voting({ rests }) {
  const [inputSearch, setInputSearch] = useState("");
  const rest = rests.sort((a, b) => a.votes - b.votes);
  const restBackwards = rest.reverse();

  const filteredrests = rests.filter((el) => {
    //if no input the return the original
    if (inputSearch === "") {
      return;
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(inputSearch);
    }
  });

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
  return (
    <div>
      <input
        type="text"
        placeholder="Search Restaurants"
        onChange={inputHandler}
      />
      {filteredrests.map((i) => (
        <div key={i.id}>
          <p>{i.name}</p>
          {i.votes > 0 ? <p>{i.votes}</p> : <p>No votes yet</p>}
          <button onClick={() => onClickVote(i.id, i.votes)}>Vote</button>
        </div>
      ))}
    </div>
  );
}
