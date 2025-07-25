import React from "react";
import { mywork_data } from "../assets/mywork_data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "./MyWork.css";

const MyWork = () => {
  return (
    <motion.div
      id="work"
      className="mywork"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <div className="mywork-bg-blob" />
      <h1>My latest work</h1>
      <div className="work-container">
        {mywork_data.map((work, index) => (
          <motion.div
            className="work-item"
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 24px var(--accent)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={work.image} alt={work.title} />
            <div className="work-content">
              <h3 className="work-title">{work.title}</h3>
              <p className="work-desc">{work.description}</p>
              <div className="work-tech">
                {work.tech.map((t) => (
                  <span className="work-tech-badge" key={t}>{t}</span>
                ))}
              </div>
              <div className="work-links">
                {work.live && work.live !== "" && (
                  <a href={work.live} target="_blank" rel="noopener noreferrer" className="work-link">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
                <a href={work.github} target="_blank" rel="noopener noreferrer" className="work-link">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyWork;
