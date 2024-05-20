import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Restaurants">Restaurants</Link>
        </li>
        <li>
          <Link to="/GoldenTomato">Golden Tomato</Link>
        </li>
      </ul>
    </div>
  );
}
