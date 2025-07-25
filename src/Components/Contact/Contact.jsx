import React, { useState, useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTelegramPlane, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./Contact.css";

const socialLinks = [
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/eliasaynekulu/", label: "LinkedIn" },
  { icon: <FaGithub />, url: "https://github.com/Elakulu2639", label: "GitHub" },
  { icon: <FaTelegramPlane />, url: "https://t.me/@Ela_2639", label: "Telegram" },
  { icon: <FaInstagram />, url: "https://instagram.com/ela_kulu", label: "Instagram" },
  { icon: <FaWhatsapp />, url: "https://wa.me/+251962771180", label: "WhatsApp" },
];

const SERVICE_ID = "service_k23vfrb"; // TODO: Replace with your EmailJS service ID
const TEMPLATE_ID = "template_b0l9tsj"; // TODO: Replace with your EmailJS template ID
const USER_ID = "6ijfXE-zIjOu1O4bX"; // TODO: Replace with your EmailJS user/public key

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Please try again later.");
          setLoading(false);
    }
      );
  };

  return (
    <motion.div
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    >
      <div className="contact-bg-blob" />
      <div className="contact-info">
        <h1>Let's talk</h1>
        <p>
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="icons">
          <div className="icon"><FaMapMarkerAlt /> Addis Ababa, Ethiopia</div>
          <div className="icon"><FaPhone /> +251 962 771 180</div>
          <div className="icon"><FaEnvelope /> e9710092@gmail.com</div>
          </div>
        <div className="contact-socials">
          {socialLinks.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label={s.label}
              whileHover={{ scale: 1.2, color: "var(--accent)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && <p className="contact-status">{status}</p>}
        </form>
    </motion.div>
  );
};

export default Contact;
