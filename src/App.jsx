import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

const sections = [
  { id: "intro", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      let current = "intro";
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= window.innerHeight / 3) current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#0a1128] z-50 flex justify-between items-center px-6 py-4 shadow-md text-white">
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => scrollToSection("intro")}
        >
          MyPortfolio
        </div>
        <ul className="flex gap-6">
          {sections.map(({ id, label }) => (
            <li
              key={id}
              className={`cursor-pointer ${
                activeSection === id ? "text-blue-500 font-semibold" : ""
              }`}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      </nav>

      <main className="pt-20">
        {sections.map(({ id }) => {
          const ComponentMap = {
            intro: Intro,
            projects: Projects,
            skills: Skills,
            experience: Experience,
            education: Education,
            certificates: Certificates,
            achievements: Achievements,
            contact: Contact,
          };
          const Component = ComponentMap[id];

          return (
            <motion.section
              key={id}
              id={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <Component />
            </motion.section>
          );
        })}
      </main>
    </>
  );
};

export default App;
