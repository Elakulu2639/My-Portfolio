import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Contact", href: "#contact" }
];

const navItemVariants = {
  closed: { opacity: 0, x: -40 },
  open: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.18 * i } })
};

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
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
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="navbar">
      <div className="navbar-inner">
        <AnchorLink href="#home" className="logo logo-container" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none'}}>
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </AnchorLink>
        <div className="navbar-navrow">
          <ul className={`nav-menu${isOpen ? " open" : ""}`}>
            {/* Desktop/Large screen nav items */}
            {(!isOpen || window.innerWidth > 768) && navItems.map((item) => (
              <li
                key={item.label}
                className={menu === item.label.toLowerCase().replace(/\s/g, "") ? "active-menu-item" : ""}
              >
          <AnchorLink
            className="anchor-link"
                  href={item.href}
            onClick={() => {
                    setMenu(item.label.toLowerCase().replace(/\s/g, ""));
              closeMenu();
            }}
          >
                  <p>{item.label}</p>
          </AnchorLink>
        </li>
            ))}
            {/* Mobile nav items with animation */}
            <AnimatePresence>
              {isOpen && window.innerWidth <= 768 && navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  className={menu === item.label.toLowerCase().replace(/\s/g, "") ? "active-menu-item" : ""}
                  custom={i}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={navItemVariants}
                >
          <AnchorLink
            className="anchor-link"
                    href={item.href}
            onClick={() => {
                      setMenu(item.label.toLowerCase().replace(/\s/g, ""));
              closeMenu();
            }}
          >
                    <p>{item.label}</p>
          </AnchorLink>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          {/* Dark mode toggle as a nav item */}
          <button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              marginLeft: "1.2rem",
              fontSize: "1.5rem",
              color: darkMode ? "#ffe066" : "#333"
            }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <div
            className={`hamburger${isOpen ? " open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            tabIndex={0}
            role="button"
          >
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </div>
          {isOpen && <div className="nav-overlay" onClick={closeMenu} />}
      </div>
      </div>
    </div>
  );
};

export default Navbar;
