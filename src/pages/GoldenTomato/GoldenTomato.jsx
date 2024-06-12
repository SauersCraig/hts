import "./GoldenTomato.styles.css";
import { Voting } from "../../components/Voting/Voting";
import Rankings from "../../components/Rankings/Rankings";
export function GoldenTomato() {
  return (
    <div className="gtContainer" id="JumpHere">
      <h1 className="gtHeader">
        Hello Sarah! Enjoying Hot Tomato Summer?<br></br> Vote for your favorite
        restaurant to win the Golden Tomato Award.
      </h1>
      <Voting />
      <Rankings />
    </div>
  );
}
