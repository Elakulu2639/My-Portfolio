import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaProjectDiagram, FaSmile } from "react-icons/fa";
import "./About.css";
import profile_img from "../assets/profile_img.jpg";

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section creative-about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="about-bg-blob" />
      <div className="about-content">
        <div className="about-left">
          <img
            src={profile_img}
            alt="Profile"
            className="about-img"
          />
        </div>
        <div className="about-right">
          <h2 className="about-title gradient-text">About Me</h2>
          <div className="about-para">
            <span>
              I’m a creative and versatile developer with a passion for building seamless digital experiences. Whether it’s frontend, backend, or full stack, I love turning ideas into beautiful, functional products.
            </span>
            <span>
              My journey spans UI/UX design, application development, and software engineering—always with a focus on user-centric, modern solutions and continuous learning.
            </span>
          </div>
          <div className="about-achievements creative-achievements">
            <div className="about-achievement">
              <FaAward className="about-achievement-icon" />
              <h1>2+</h1>
              <p>Years Experience</p>
            </div>
            <div className="about-achievement">
              <FaProjectDiagram className="about-achievement-icon" />
              <h1>10+</h1>
              <p>Projects Completed</p>
            </div>
            <div className="about-achievement">
              <FaSmile className="about-achievement-icon" />
              <h1>5+</h1>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
