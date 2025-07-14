import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa"; // Add sun/moon icons

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for dark mode preference
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Toggle dark mode and update html class
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      if (newMode) {
        document.documentElement.classList.add("dark-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
      }
      return newMode;
    });
  };

  // On mount, set the class based on localStorage
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="navbar">
      <a href="#home" className="logo logo-container" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none'}}>
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </a>
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li className={menu === "home" ? "active-menu-item" : ""}>
          <AnchorLink
            className="anchor-link"
            href="#home"
            onClick={() => {
              setMenu("home");
              closeMenu();
            }}
          >
            <p>Home</p>
          </AnchorLink>
        </li>
        <li className={menu === "about" ? "active-menu-item" : ""}>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={() => {
              setMenu("about");
              closeMenu();
            }}
          >
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li className={menu === "services" ? "active-menu-item" : ""}>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#services"
            onClick={() => {
              setMenu("services");
              closeMenu();
            }}
          >
            <p>Services</p>
          </AnchorLink>
        </li>
        <li className={menu === "work" ? "active-menu-item" : ""}>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#work"
            onClick={() => {
              setMenu("work");
              closeMenu();
            }}
          >
            <p>Portfolio</p>
          </AnchorLink>
        </li>
        <li className={menu === "contact" ? "active-menu-item" : ""}>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={() => {
              setMenu("contact");
              closeMenu();
            }}
          >
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink
          className="anchor-link"
          offset={50}
          href="#contact"
          onClick={() => {
            setMenu("contact");
            closeMenu();
          }}
        >
          <p>Connect With Me</p>
        </AnchorLink>
      </div>
      {/* Dark mode toggle button */}
      <button
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          marginLeft: "1rem",
          fontSize: "1.5rem",
          color: darkMode ? "#ffe066" : "#333"
        }}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className="icon" onClick={closeMenu} />
        ) : (
          <FaBars className="icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
