import "./NavBar.styles.css";
import { useState } from "react";
import hamburg from "../../assets/icons/hamburg-icon.svg";
import { Link } from "react-router-dom";
import htsLogo from "../../assets/HTS-simple-web.png";
export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navBar">
      <div>
        <a href="/">
          <img src={htsLogo} alt="Hot Tomato Summer Logo" className="navLogo" />
        </a>
      </div>
      <button className="hamburger">
        <img
          src={hamburg}
          alt="button to open dropdown menu"
          onClick={() => setOpen(!open)}
        />
      </button>

      {open && (
        <div className="navBarDropdown" onClick={() => setOpen(!open)}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Restaurants">Restaurants & Specials </Link>
            </li>
            <li>
              <a
                href="https://dukesmayo.com/collections/merchandise"
                target="_blank"
              >
                Shop Merch
              </a>
            </li>
            <li>
              <Link to="/GoldenTomato">Vote Golden Tomato Award </Link>
            </li>
            <li>
              <a href="https://dukesmayo.com/" target="_blank">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
