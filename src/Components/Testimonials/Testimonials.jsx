import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Jane Doe",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Elias is a fantastic developer! He delivered our project on time and exceeded expectations with his attention to detail.",
    title: "Product Manager, Acme Inc."
  },
  {
    name: "John Smith",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Working with Elias was a pleasure. His creativity and technical skills are top-notch.",
    title: "CTO, Tech Solutions"
  },
  {
    name: "Emily Chen",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "I highly recommend Elias for any frontend project. He brings ideas to life beautifully!",
    title: "Designer, Freelance"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.18 * i, duration: 0.7, type: "spring" } })
};

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      className="testimonials-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="testimonials-bg-blob" />
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((t, idx) => (
          <motion.div
            className="testimonial-card"
            key={t.name}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <img className="testimonial-avatar" src={t.avatar} alt={t.name + " avatar"} />
            <div className="testimonial-quote">{t.quote}</div>
            <div className="testimonial-name">{t.name}</div>
            <div className="testimonial-title">{t.title}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials; 