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
            Full-stack developer passionate about building modern, scalable, and user-friendly applications. Experienced in frontend, backend, databases, DevOps, and UI/UX design.
          </p>
          <div className="footer-social-icons">
            <a href="https://github.com/Elakulu2639" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/eliasaynekulu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><FaTelegramPlane /></a>
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
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
          <h4>Services</h4>
          <ul>
            <li>Frontend Development</li>
            <li>Backend/API Development</li>
            <li>Database Design</li>
            <li>DevOps & Deployment</li>
            <li>UI/UX Design</li>
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
        <span className="footer-made">Made with <span style={{color: 'var(--accent2)', fontWeight: 700}}>&#10084;</span> using React &amp; Framer Motion</span>
      </div>
    </footer>
  );
};

export default Footer;
