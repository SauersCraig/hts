import { useState, useEffect } from "react";
import { Voting } from "../../components/Voting/Voting";
import Rankings from "../../components/Rankings/Rankings";
export function GoldenTomato({ session }) {
  return (
    <div>
      <h1>Hello From Golden Tomato </h1>
      <Voting />
      <Rankings />
    </div>
  );
}
