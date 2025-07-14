import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "React", icon: <FaReact />, level: 90 },
  { name: "JavaScript", icon: <FaJs />, level: 90 },
  { name: "HTML5", icon: <FaHtml5 />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs />, level: 75 },
  { name: "Git", icon: <FaGitAlt />, level: 85 },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, idx) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            whileHover={{ scale: 1.06, boxShadow: "0 4px 16px var(--accent)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar-bg">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level + "%" }}
                  transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills; 