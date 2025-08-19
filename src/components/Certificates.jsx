import React from "react";
import { motion } from "framer-motion";

const certificateData = [
  {
    title: "Google Cloud Career Launchpad DataAnalytics Track",
    issuer: "Google Cloud Skill Boost",
    year: 2025,
    link: "https://www.linkedin.com/in/praveen-rathinam-p/overlay/1754449963144/single-media-viewer/?profileId=ACoAAE1oDRYB9K5HbUDyngtJNwD8nr9_uG3mwBY",
  },
  {
    title: "Intro to Git and GitHub",
    issuer: "Le Wagon",
    year: 2025,
    link: "https://www.linkedin.com/in/praveen-rathinam-p/overlay/1752345006953/single-media-viewer/?profileId=ACoAAE1oDRYB9K5HbUDyngtJNwD8nr9_uG3mwBY",
  },

  {
    title: "MongoDB",
    issuer: "Udemy",
    year: 2024,
    link: "https://www.linkedin.com/in/praveen-rathinam-p/details/certifications/1753627922179/single-media-viewer/?profileId=ACoAAE1oDRYB9K5HbUDyngtJNwD8nr9_uG3mwBY",
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
