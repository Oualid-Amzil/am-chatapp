import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>Chat</h3>
        <span>app</span>
      </div>
      <div className="nav__right">
        <ul>
          <li>Product</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Log In</li>
        </ul>
        <button>Try it Free</button>
      </div>
    </div>
  );
};

export default NavBar;
