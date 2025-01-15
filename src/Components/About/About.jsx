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
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I'm Elias Aynekulu, an experienced Full Stack Developer
              with a deep love for technology and innovation. I thrive on the
              challenge of building dynamic and responsive web applications that
              not only meet client needs but also provide exceptional user
              experiences.
            </p>
            <p>
              I am passionate about coding and enjoy exploring new technologies.
              The thrill of solving complex problems and turning ideas into
              reality drives my work.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Git</p>
              <hr style={{ width: "55%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
