import React from "react";
import "./About.css";
import profile_img from "../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <span>
              Hi! I'm Elias Aynekulu, a passionate frontend developer dedicated to building beautiful, user-friendly web experiences.
            </span>
            <span>
              I love turning ideas into reality using code, and I’m always eager to learn new technologies and improve my craft.
            </span>
          </div>
          <div className="about-achievements">
            <div className="about-achievement">
              <h1>2+</h1>
              <p>Years Experience</p>
            </div>
            <div className="about-achievement">
              <h1>10+</h1>
              <p>Projects Completed</p>
            </div>
            <div className="about-achievement">
              <h1>5+</h1>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
