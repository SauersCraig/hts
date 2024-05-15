export function GoldenTomato({ session }) {
  if (session) {
    return (
      <div>
        <p>Hello From Golden Tomato you are logged in</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Log In to vote</p>
      </div>
    );
  }
}
