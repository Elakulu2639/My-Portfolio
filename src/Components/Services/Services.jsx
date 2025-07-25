import React from "react";
import "./Services.css";
import { FaDesktop, FaServer, FaDatabase, FaCloud, FaPencilRuler } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services_data = [
    {
      icon: <FaDesktop />,
      title: "Frontend Development",
      description:
        "Building responsive, modern web interfaces with React, Next.js, Vue.js, Tailwind, and more.",
    },
    {
      icon: <FaServer />,
      title: "Backend & API Development",
      description:
        "Designing robust APIs and server logic using Node.js, Python (FastAPI), Java, and .NET Core.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      description:
        "Modeling and optimizing databases with SQL Server, PostgreSQL, and best practices for data integrity.",
    },
    {
      icon: <FaCloud />,
      title: "DevOps & Deployment",
      description:
        "Automating deployment, CI/CD, and cloud hosting for scalable, reliable applications.",
    },
    {
      icon: <FaPencilRuler />,
      title: "UI/UX Design",
      description:
        "Crafting user-centric, visually engaging interfaces and seamless user experiences.",
    },
  ];

  return (
    <motion.div
      id="services"
      className="services"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {services_data.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 24px var(--accent)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
