import "./ThankYou.styles.css";

export function ThankYou({ name }) {
  return (
    <div>
      <h1 className="headerTY">Thank You for Voting {name}!</h1>
      <p className="secLineTY">Come back tomorrow to vote again.</p>
    </div>
  );
}
