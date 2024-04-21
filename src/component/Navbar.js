import React from "react";
import Geeks from "./geeks.png";
import "./Navbar.css"; // Import CSS file

const Navbar = () => {
  return (
    <div className="navbar"> {/* Add className for styling */}
      <div>
        <img src={Geeks} alt=""></img>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Quote</li>
          <li>Contact</li>
          <li>Geeks</li>
        </ul>
      </div>
      <div>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
