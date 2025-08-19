import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Sc. Computer Science",
    institution: "State University",
    duration: "2015 - 2019",
    details: "Graduated with First Class Honors.",
  },
];

const Education = () => {
  return (
    <>
      <h2 className="section-title">Education</h2>
      {educationData.map(({ degree, institution, duration, details }) => (
        <motion.div
          key={degree}
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3>{degree}</h3>
          <p style={{ fontStyle: "italic", color: "#64748b" }}>
            {institution} - {duration}
          </p>
          <p>{details}</p>
        </motion.div>
      ))}
    </>
  );
};

export default Education;
