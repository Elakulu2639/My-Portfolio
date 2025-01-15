import React, { useEffect, useState } from "react";
import "./Hero.css";
import profile_img from "../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const roles = [
  "Frontend Designer",
  "Web Designer",
  "UI / UX Designer",
  "Web Developer",
  "Software Tester",
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
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" />
      <div className="hero-content">
        <h1>
          Hi, it's <span>Elias</span>
        </h1>
        <h3 className="text-animation">
          I'm a <span className="animated-text">{displayedText}</span>
        </h3>
        <p>
          I am an experienced Full Stack Developer with a passion for building
          dynamic and responsive web applications. With a robust background in
          both front-end and back-end technologies, I excel at creating seamless
          user experiences while ensuring efficient server-side functionality.
        </p>
      </div>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Connect With Me</p>
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
