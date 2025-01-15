import React from "react";
import "./Services.css";
import { FaDesktop, FaMobileAlt, FaPencilAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">
            <FaDesktop />
          </div>
          <h3>Web Design</h3>
          <p>
            Crafting visually appealing and user-friendly websites that
            captivate your audience.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <FaMobileAlt />
          </div>
          <h3>App Design</h3>
          <p>
            Designing intuitive and engaging mobile applications that provide a
            seamless user experience.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <FaPencilAlt />
          </div>
          <h3>UI/UX Design</h3>
          <p>
            Optimizing the interface and user experience to ensure maximum
            usability and satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
