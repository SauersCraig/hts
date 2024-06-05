import "./NavBar.styles.css";
import { Link } from "react-router-dom";
import htsLogo from "../../assets/HTS-simple-web.png";
export function NavBar() {
  return (
    <div className="navBar">
      <div>
        <img src={htsLogo} alt="Hot Tomato Summer Logo" className="navLogo" />
      </div>
      <div className="navBarDropdown">
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
    </div>
  );
}
