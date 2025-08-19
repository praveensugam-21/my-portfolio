import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2021 - Present",
    details: "Building responsive and accessible React applications.",
  },
  {
    role: "Software Engineer",
    company: "Innovatech Labs",
    duration: "Jun 2019 - Dec 2020",
    details: "Worked on full-stack apps using MERN stack and cloud deployment.",
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
