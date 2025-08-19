import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Intern",
    company: "Vteach - Tindivanam ",
    duration: "15 days - June 2025",
    details:"AI & Computer Vision – Developed a mini project and gained understanding of TensorFlow, Keras, PyTorch, YOLOv5, and Matplotlib.",
  },
];

const Experience = () => {
  return (
    <>
      <h2 className="section-title">Experience</h2>
      {experienceData.map(({ role, company, duration, details }) => (
        <motion.div
          key={role}
          className="card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>
            {role} @ {company}
          </h3>
          <p style={{ fontStyle: "italic", color: "#64748b" }}>{duration}</p>
          <p>{details}</p>
        </motion.div>
      ))}
    </>
  );
};

export default Experience;
