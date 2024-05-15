import { supabase } from "../../client";

export function Restaurants({ restaurants }) {
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
    <div>
      <button onClick={() => setSession(null)}>Log Out</button>
      {restaurants.map((i) => (
        <div key={i.id}>
          <p>{i.name}</p>
          <p>{i.address}</p>

          <p>{i.city}</p>
          {i.votes > 0 ? <p>{i.votes}</p> : <p>0</p>}
          <button onClick={() => onClickVote(i.id, i.votes)}>Vote</button>
        </div>
      ))}
    </div>
  );
}
