import "./NavBar.styles.css";
import { useState } from "react";
import hamburg from "../../assets/icons/hamburg-icon.svg";
import { Link } from "react-router-dom";
import htsLogo from "../../assets/HTS-simple-web.png";
export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navBar">
      <div>
        <a href="/">
          <img src={htsLogo} alt="Hot Tomato Summer Logo" className="navLogo" />
        </a>
      </div>
      <img
        src={hamburg}
        alt="button to open dropdown menu"
        className="hamburger"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="navBarDropdown" onClick={() => setOpen(!open)}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Restaurants">Participating Restaurants </Link>
            </li>
            <li>
              <Link to="/GoldenTomato">Golden Tomato Award </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
