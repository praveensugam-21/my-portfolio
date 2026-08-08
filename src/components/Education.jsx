import React from "react";
import { motion } from "framer-motion";
import { details } from "framer-motion/client";

const educationData = [
  {
    degree: "Higher Secondary",
    institution: "SRV Matriculation Higher Secondary School",
    duration: "2022-2023",
    details: "Percentage: 93.33% ",
  },
  {
    degree: "B.Tech Information Technology",
    institution: "Sri Sivasubramaniya Nadar College of Engineering",
    duration: "2023 - 2027",
    details: "CGPA - 7.71 ",
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
