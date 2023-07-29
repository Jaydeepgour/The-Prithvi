import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <img className="earth-logo" src="https://o.remove.bg/downloads/2d62ba63-ec50-42c6-85da-d6da589bd73f/pngtree-vector-earth-icon-png-image_719352-removebg-preview.png" alt="" />    
      <img src="https://o.remove.bg/downloads/59f27ddb-9cdb-4ee1-bdc5-b94cd9323e0f/lqc1Jz8TQkDftN4uUySh-removebg-preview.png" alt="" />
        {/* Add other navigation items or links here */}
      </div>
    </nav>
  );
};

export default Navbar;
