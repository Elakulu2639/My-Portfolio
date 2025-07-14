import React from "react";
import "./Services.css";
import { FaDesktop, FaMobileAlt, FaPencilAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services_data = [
    {
      icon: <FaDesktop />,
      title: "Web Design",
      description:
        "Crafting visually appealing and user-friendly websites that captivate your audience.",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Design",
      description:
        "Designing intuitive and engaging mobile applications that provide a seamless user experience.",
    },
    {
      icon: <FaPencilAlt />,
      title: "UI/UX Design",
      description:
        "Optimizing the interface and user experience to ensure maximum usability and satisfaction.",
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
