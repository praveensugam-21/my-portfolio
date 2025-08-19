import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section
      className="text-center"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem", fontWeight: "800", color: "#3b82f6" }}
      >
        Hello, I'm John Doe
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ fontSize: "1.3rem", marginTop: 10, color: "#cbd5e1" }}
      >
        A passionate Full-Stack Developer building amazing digital experiences.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="primary-btn"
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          })
        }
        style={{
          marginTop: 40,
          maxWidth: 150,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Contact Me
      </motion.button>
    </section>
  );
};

export default Intro;
