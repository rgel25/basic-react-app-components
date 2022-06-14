import React from "react";
import logo from "../images/react-nav-logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src={logo} alt="react-logo-small"></img>
        <h4>ReactFacts</h4>
      </div>
      <div className="nav-links">
        <h3>React Course - Project 1</h3>
      </div>
    </nav>
  );
}
