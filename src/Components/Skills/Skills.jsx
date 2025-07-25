import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaBootstrap, FaVuejs, FaPython, FaJava, FaDatabase, FaBrain, FaComments } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFastapi, SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";
import "./Skills.css";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML/CSS", icon: <FaHtml5 />, level: 95 },
      { name: "JavaScript", icon: <FaJs />, level: 90 },
      { name: "React.js", icon: <FaReact />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
      { name: "Bootstrap", icon: <FaBootstrap />, level: 80 },
      { name: "Vue.js", icon: <FaVuejs />, level: 70 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
    ],
  },
  {
    title: "Backend & Programming",
    skills: [
      { name: "C++", icon: <FaBrain />, level: 70 },
      { name: "Python (FastAPI)", icon: <FaPython />, level: 75 },
      { name: "Java", icon: <FaJava />, level: 75 },
      { name: "ASP.NET MVC", icon: <FaDatabase />, level: 70 },
      { name: "ASP.NET Core", icon: <FaDatabase />, level: 70 },
      { name: "Node.js", icon: <FaNodeJs />, level: 80 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL Server", icon: <FaDatabase />, level: 75 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 75 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt />, level: 85 },
      { name: "Prompt Engineering", icon: <FaBrain />, level: 80 },
    ],
  },
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
      <div className="skills-bg-blob" />
      <h2 className="skills-title">Skills</h2>
      <div className="skills-categories">
        {skillCategories.map((cat) => (
          <div className="skills-category" key={cat.title}>
            <h3 className="skills-category-title">{cat.title}</h3>
            <div className="skills-list compact-skills-list">
              {cat.skills.map((skill, idx) => (
                <motion.div
                  className="skill-card compact-skill-card"
                  key={skill.name}
                  whileHover={{ scale: 1.04, boxShadow: "0 4px 16px var(--accent)" }}
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
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills; 