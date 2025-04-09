import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="Nav-logo">
        <img src="src/assets/sample.jpg" alt="Profile logo" />
      </div>
      <ul>
        <li><Link to="/">Mydashboard</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/companies">Companies</Link></li>

        <li><Link to="/events" >Events</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;