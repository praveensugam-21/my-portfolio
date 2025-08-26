import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const certificateData = [
  {
    title: "Google Cloud Career Launchpad DataAnalytics Track",
    issuer: "Google Cloud Skill Boost",
    year: 2025,
    link: "https://www.linkedin.com/in/praveen-rathinam-p/overlay/1754449963144/single-media-viewer/?profileId=ACoAAE1oDRYB9K5HbUDyngtJNwD8nr9_uG3mwBY",
    image: "/assets/certificates/cloud.jpg",
  },
  {
    title: "Intro to Git and GitHub",
    issuer: "Le Wagon",
    year: 2025,
    link: "https://www.linkedin.com/in/praveen-rathinam-p/overlay/1752345006953/single-media-viewer/?profileId=ACoAAE1oDRYB9K5HbUDyngtJNwD8nr9_uG3mwBY",
    image: "/assets/certificates/git.jpg",
  },
  {
    title: "MongoDB",
    issuer: "Udemy",
    year: 2024,
    link: "https://www.linkedin.com/in/praveen-rathinam-p/details/certifications/1753627922179/single-media-viewer/?profileId=ACoAAE1oDRYB9K5HbUDyngtJNwD8nr9_uG3mwBY",
    image: "/assets/certificates/mongodb.jpg",
  },
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < certificateData.length - 1 ? prev + 1 : 0
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const cardWidth = 320;
  const cardGap = 20;

  // Dynamic padding so last card can center
  const containerPadding = (window.innerWidth - cardWidth) / 2;

  const translateX = currentIndex * (cardWidth + cardGap);

  return (
    <div style={{ padding: "40px 0", textAlign: "center" }}>
      <h2 className="section-title">Certificates</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start", // start from left
          overflow: "hidden",
          padding: `30px ${containerPadding}px`, // dynamic side padding
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: `${cardGap}px`,
          }}
          animate={{ x: `-${translateX}px` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {certificateData.map((cert, index) => {
            const offset = index - currentIndex;
            return (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: `${cardWidth}px`,
                  textAlign: "center",
                  cursor: "pointer",
                }}
                animate={{
                  scale: offset === 0 ? 1.2 : 0.9,
                  opacity: offset === 0 ? 1 : 0.5,
                  zIndex: offset === 0 ? 10 : 1,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    width: "100%",
                    height: "240px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    boxShadow:
                      offset === 0 ? "0 10px 25px rgba(0,0,0,0.3)" : "none",
                    marginBottom: "10px",
                  }}
                />
                <h3>{cert.title}</h3>
                <p>
                  {cert.issuer} - {cert.year}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;
