import React from "react";
import { motion } from "framer-motion";

const certificateData = [
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    year: 2022,
    link: "https://www.udemy.com/certificate/UC-12345/",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: 2021,
    link: "https://www.freecodecamp.org/certification/johndoe/javascript-algorithms",
  },
];

const Certificates = () => {
  return (
    <>
      <h2 className="section-title">Certificates</h2>
      {certificateData.map(({ title, issuer, year, link }) => (
        <motion.a
          key={title}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgb(59 130 246 / 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          style={{ display: "block" }}
        >
          <h3>{title}</h3>
          <p>
            {issuer} - {year}
          </p>
        </motion.a>
      ))}
    </>
  );
};

export default Certificates;
