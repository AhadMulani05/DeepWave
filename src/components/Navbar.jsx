import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-img"></div>
      <div className="logo">DeepWave</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#water-quality">Water Quality</a></li>
        <li><a href="#states">States</a></li>
        <li><a href="#analysis">Analysis</a></li>
        <li><a href="#about-us">About Us</a></li>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
