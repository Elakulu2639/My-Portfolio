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
        "Developing responsive, high-performance web applications using React, Next.js, Vue.js, and modern CSS frameworks with focus on user experience and accessibility.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Architecting scalable server-side solutions and RESTful APIs using Node.js, Python FastAPI, Java, and ASP.NET Core with emphasis on security and performance.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Architecture",
      description:
        "Designing and optimizing database schemas using SQL Server and PostgreSQL, ensuring data integrity, performance, and scalability for enterprise applications.",
    },
    {
      icon: <FaCloud />,
      title: "DevOps & Cloud Solutions",
      description:
        "Implementing CI/CD pipelines, containerization, and cloud deployment strategies to ensure reliable, scalable, and maintainable application infrastructure.",
    },
    {
      icon: <FaPencilRuler />,
      title: "System Architecture",
      description:
        "Designing comprehensive system architectures and technical solutions that align with business requirements and industry best practices.",
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
