import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Portfolio Website",
    desc: "React + Vite portfolio with animations and multiple pages.",
    link: "https://github.com/johndoe/portfolio",
    techs: ["React", "Vite", "Framer Motion"],
  },
  {
    title: "E-commerce Store",
    desc: "Modern e-commerce platform with shopping cart and payment integration.",
    link: "https://github.com/johndoe/ecommerce",
    techs: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Chat App",
    desc: "Realtime chat app with web sockets and user authentication.",
    link: "https://github.com/johndoe/chatapp",
    techs: ["React", "Socket.IO", "Express"],
  },
];

const Projects = () => {
  return (
    <>
      <h2 className="section-title">Projects</h2>
      <div className="grid-3">
        {projectData.map(({ title, desc, link, techs }) => (
          <motion.a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 30px rgb(59 130 246 / 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <h3 style={{ color: "#3b82f6" }}>{title}</h3>
            <p>{desc}</p>
            <p style={{ marginTop: 10, fontStyle: "italic", color: "#94a3b8" }}>
              Tech: {techs.join(", ")}
            </p>
          </motion.a>
        ))}
      </div>
    </>
  );
};

export default Projects;
