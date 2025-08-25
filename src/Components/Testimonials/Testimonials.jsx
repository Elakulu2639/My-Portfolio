import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Elias delivered exceptional results on our enterprise application. His technical expertise and professional approach made the entire project seamless.",
    title: "Senior Product Manager, TechCorp"
  },
  {
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Outstanding work on our full-stack solution. Elias combines strong technical skills with excellent communication and project management.",
    title: "CTO, InnovateLabs"
  },
  {
    name: "David Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "Elias transformed our legacy system into a modern, scalable application. His attention to detail and code quality is impressive.",
    title: "Engineering Manager, DataFlow Systems"
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