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
       Hi !, I'm P.Praveen Rathinam
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ fontSize: "1.3rem", marginTop: 10, color: "#cbd5e1" }}
      >
         A motivated third-year Information Technology student from Chennai. I
        have hands-on experience in front-end and back-end development using
        Python, HTML, CSS, JavaScript, React.js, and MySQL. I’m passionate about
        building user-friendly applications and exploring new technologies. I
        also have practical experience in AI and Computer Vision, including
        projects involving CNNs, YOLOv5, and real-time object detection. I’m a
        strong communicator and team player, always eager to contribute, learn,
        and solve real-world IT challenges.{" "}
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
