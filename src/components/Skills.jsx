import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "CSS/SCSS", level: 80 },
  { name: "TypeScript", level: 70 },
  { name: "Git", level: 85 },
  { name: "Docker", level: 65 },
];

const Skills = () => {
  return (
    <>
      <h2 className="section-title">Skills</h2>
      <div>
        {skillsData.map(({ name, level }) => (
          <motion.div
            key={name}
            className="card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4>{name}</h4>
            <div
              style={{
                background: "#334155",
                borderRadius: 8,
                overflow: "hidden",
                height: 12,
                marginTop: 6,
              }}
            >
              <motion.div
                style={{ height: 12, background: "#3b82f6" }}
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Skills;
