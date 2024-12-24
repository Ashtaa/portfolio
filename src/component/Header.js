import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import "./Header.css";

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${theme}`}>
      <div
        className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
          <a href="#home" onClick={toggleMenu}> Home</a>
          </li>
          <li>
          <a href="#about" onClick={toggleMenu}> About</a>
          </li>
          <li>
          <a href="#skill" onClick={toggleMenu}> Skills</a>
            
          </li>
          <li>
          <a href="#project" onClick={toggleMenu}> Project</a>
            
          </li>
          <li>
             <a href="#contact" onClick={toggleMenu}> Contact</a>
              
            
          </li>
          <li>
            <button className="toggle-button" onClick={toggleTheme}>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
