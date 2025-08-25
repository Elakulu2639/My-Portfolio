import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profile_img from "../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaDownload } from "react-icons/fa";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Software Engineer",
  "Application Developer",
  "UI / UX Designer",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [displayedText, setDisplayedText] = useState(currentRole);
  const [index, setIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isRemoving) {
          if (displayedText.length > 0) {
            setDisplayedText((prev) => prev.slice(0, -1));
          } else {
            setIsRemoving(false);
            setIndex((prev) => (prev + 1) % roles.length);
          }
        } else {
          if (displayedText.length < roles[index].length) {
            setDisplayedText((prev) => roles[index].slice(0, prev.length + 1));
          } else {
            setIsRemoving(true);
          }
        }
      },
      isRemoving ? 100 : 200
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isRemoving, index]);

  return (
    <motion.div
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img src={profile_img} alt="Profile" />
      <div className="hero-content">
        <h1>
          <span>Elias Aynekulu</span>
        </h1>
        <h3 className="text-animation">
          <span className="animated-text">{displayedText}</span>
        </h3>
        <p>
          Experienced software engineer specializing in full-stack development with expertise in modern web technologies, enterprise applications, and scalable system architecture. Proven track record of delivering high-quality solutions that drive business growth and enhance user experiences.
        </p>
      </div>
      <div className="hero-action">
        <AnchorLink href="#contact" className="hero-connect-anchor">
          <motion.div
            className="hero-connect"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get In Touch
          </motion.div>
          </AnchorLink>
        <motion.a
          href="/resume.pdf"
          download
          className="hero-download-resume"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
        >
          <FaDownload /> Download Resume
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Hero;
