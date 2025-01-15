import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d57ba47c-fb34-40e5-adce-2c78aa5e6713");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        alert("Message sent successfully!");
        setStatus("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again.");
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-info">
        <h1>Let's talk</h1>
        <p>
          I'm currently available to take on new projects, so feel free to send
          me a message about anything that you want me to work on. You can
          contact anytime.
        </p>
        <div className="icons">
          <div className="icon">
            <FaEnvelope />
            <span>Email: elakulu1993@gmail.com</span>
          </div>
          <div className="icon">
            <FaPhone />
            <span>Phone: +251962771180</span>
          </div>
          <div className="icon">
            <FaMapMarkerAlt />
            <span>Location: Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
