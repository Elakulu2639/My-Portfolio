import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      <hr className="footer-separator" />
      <div className="footer-content">
        <h3>Elias Aynekulu</h3>
        <p>Full Stack Developer</p>
        <div className="footer-nav">
          <AnchorLink href="#home" className="footer-link">
            Home
          </AnchorLink>
          <AnchorLink href="#about" className="footer-link">
            About
          </AnchorLink>
          <AnchorLink href="#services" className="footer-link">
            Services
          </AnchorLink>
          <AnchorLink href="#work" className="footer-link">
            My Work
          </AnchorLink>
          <AnchorLink href="#contact" className="footer-link">
            Contact
          </AnchorLink>
        </div>
        <div className="social-icons">
          <a
            href="https://t.me/@Ela_2639"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://instagram.com/ela_kulu"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/Elakulu2639"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/elias-aynekulu"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            // www.linkedin.com/in/elias-aynekulu
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Elias Aynekulu. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
