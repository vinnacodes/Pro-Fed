import React from "react";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div className="Nav">
      <ul>
        <li>
          <img src="src/assets/sample.jpg" alt="Profile logo" />
        </li>
        <li>Home</li>
        <li>Jobs</li>
        <li>Companies</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
