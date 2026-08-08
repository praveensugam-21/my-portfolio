<<<<<<< HEAD
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Interactive Floating Neural Network Background */}
      <BackgroundCanvas />

      {/* Floating Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="portfolio-main">
        <Hero />
        
        <TechTicker />

        <Timeline />

        <Skills />

        <Projects />

        <Certifications />

        <Contact />
      </main>

      {/* Modern Sleek Footer */}
      <footer className="portfolio-footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Praveen Rathinam P. All rights reserved.</p>
          <p className="footer-built">Built with React, Vite & HSL Custom CSS</p>
        </div>
      </footer>

      <style>{`
        .portfolio-main {
          flex: 1;
        }

        .portfolio-footer {
          padding: 2rem 0;
          background: rgba(4, 7, 19, 0.85);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          position: relative;
          z-index: 10;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-built {
          color: var(--color-primary);
        }

        @media (max-width: 600px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
=======
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
>>>>>>> c79e624130fa8545b868558bc55dbcea9ee44fb1

export default App;
