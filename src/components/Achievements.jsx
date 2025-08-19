import React from "react";
import { motion } from "framer-motion";

const achievementsData = [
  "Completed 100+ projects on freelance platforms.",
  "Speaker at ReactConf 2023.",
  "Awarded 'Best Developer' at Innovatech Labs 2020.",
];

const Achievements = () => {
  return (
    <>
      <h2 className="section-title">Achievements</h2>
      <ul>
        {achievementsData.map((item, index) => (
          <motion.li
            key={index}
            className="card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            style={{ paddingLeft: "1rem", position: "relative" }}
          >
            <span
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#3b82f6",
                fontWeight: "700",
              }}
            >
              •
            </span>
            {item}
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default Achievements;
