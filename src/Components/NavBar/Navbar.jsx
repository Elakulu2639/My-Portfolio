import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div href="#home" className="logo">
        Elias
        <span>Aynekulu</span>
      </div>
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
