import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content grid-footer">
        {/* About/Brand */}
        <div className="footer-about">
          <h3 className="footer-name gradient-text">Elias Aynekulu</h3>
          <p className="footer-desc">
            Professional software engineer specializing in full-stack development, system architecture, and enterprise solutions. Committed to delivering high-quality, scalable applications that drive business success.
          </p>
          <div className="footer-social-icons">
            <a href="https://github.com/Elakulu2639" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/eliasaynekulu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://instagram.com/ela_kulu" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://t.me/@Ela_2639" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><FaTelegramPlane /></a>
            <a href="https://wa.me/+251962771180" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a className="footer-link" href="#about">About</a></li>
            <li><a className="footer-link" href="#skills">Skills</a></li>
            <li><a className="footer-link" href="#work">Projects</a></li>
            <li><a className="footer-link" href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* Services */}
        <div className="footer-col">
          <h4>Expertise</h4>
          <ul>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Database Architecture</li>
            <li>System Design</li>
            <li>DevOps Solutions</li>
          </ul>
        </div>
        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>e9710092@gmail.com</li>
            <li>+251 962 771 180</li>
            <li>Addis Ababa, Ethiopia</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Elias Aynekulu. All rights reserved.</span>
        <span className="footer-made">Built with React & Framer Motion</span>
      </div>
    </footer>
  );
};

export default Footer;
