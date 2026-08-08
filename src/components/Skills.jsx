<<<<<<< HEAD
import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  ShieldCheck
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Skills() {
  const { skills } = resumeData;
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'tools', label: 'Tools & Technologies', icon: Terminal },
    { id: 'concepts', label: 'Concepts', icon: Cpu }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">MY TOOLKIT</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
        </div>

        {/* Tab Selectors */}
        <div className="skills-tabs glass-panel">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="skills-display-container">
          {/* 1. Languages Tab */}
          {activeTab === 'languages' && (
            <div className="skills-grid fade-in">
              {skills.programmingLanguages.map((lang, idx) => (
                <div 
                  key={lang.name} 
                  className="skill-card glass-panel"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{lang.name}</span>
                    <span className="skill-percent">{lang.level}%</span>
                  </div>
                  <div className="progress-bar-track">
                    <div 
                      className="progress-bar-fill" 
                      style={{ 
                        width: `${lang.level}%`,
                        background: `linear-gradient(90deg, var(--color-primary), ${lang.color})`,
                        boxShadow: `0 0 10px ${lang.color}`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. Databases Tab */}
          {activeTab === 'databases' && (
            <div className="skills-grid fade-in">
              {skills.databases.map((db, idx) => (
                <div 
                  key={db.name} 
                  className="skill-card glass-panel"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{db.name}</span>
                    <span className="skill-percent">{db.level}%</span>
                  </div>
                  <div className="progress-bar-track">
                    <div 
                      className="progress-bar-fill" 
                      style={{ 
                        width: `${db.level}%`,
                        background: `linear-gradient(90deg, var(--color-secondary), ${db.color})`,
                        boxShadow: `0 0 10px ${db.color}`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. Tools Tab */}
          {activeTab === 'tools' && (
            <div className="tools-grid fade-in">
              {skills.tools.map((tool, idx) => (
                <div 
                  key={tool.name} 
                  className="tool-tag-card glass-panel"
                  style={{ 
                    animationDelay: `${idx * 0.1}s`,
                    borderLeft: `3px solid ${tool.color}`
                  }}
                >
                  <span className="tool-indicator-dot" style={{ backgroundColor: tool.color }}></span>
                  <span className="tool-name-text">{tool.name}</span>
                </div>
              ))}
            </div>
          )}

          {/* 4. Concepts Tab */}
          {activeTab === 'concepts' && (
            <div className="concepts-bubble-container fade-in">
              {skills.concepts.map((concept, idx) => {
                const colors = ['--color-primary', '--color-secondary', '--color-accent', '--color-gold'];
                const selectedColor = colors[idx % colors.length];
                return (
                  <div 
                    key={concept} 
                    className="concept-bubble skill-bubble glass-panel"
                    style={{ 
                      animationDelay: `${idx * 0.25}s`,
                      borderBottom: `2px solid var(${selectedColor})`,
                    }}
                  >
                    <ShieldCheck size={14} style={{ color: `var(${selectedColor})` }} />
                    <span>{concept}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .skills-section {
          background: linear-gradient(to bottom, transparent, rgba(10, 15, 36, 0.4), transparent);
        }

        .skills-tabs {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          max-width: 650px;
          margin: 0 auto 3rem;
          padding: 0.4rem;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 0.65rem 1.25rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          flex: 1;
          justify-content: center;
        }

        .tab-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.02);
        }

        .tab-btn.active {
          color: var(--color-primary);
          background: rgba(0, 242, 254, 0.08);
        }

        /* Displays */
        .skills-display-container {
          min-height: 250px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .skill-card {
          padding: 1.5rem;
          text-align: left;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .skill-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-percent {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 0.85rem;
        }

        .progress-bar-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Tools grid */
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 1.25rem;
          max-width: 850px;
          margin: 0 auto;
        }

        .tool-tag-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          text-align: left;
        }

        .tool-indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .tool-name-text {
          font-weight: 500;
          color: var(--text-secondary);
        }

        .tool-tag-card:hover .tool-name-text {
          color: var(--text-primary);
        }

        /* Concepts bubble list */
        .concepts-bubble-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.25rem;
          max-width: 800px;
          margin: 0 auto;
          padding: 1rem 0;
        }

        .concept-bubble {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
          color: var(--text-secondary);
          border-radius: 50px;
          font-size: 0.95rem;
          cursor: default;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .concept-bubble:hover {
          color: var(--text-primary);
        }

        /* Fades & animations */
        .fade-in {
          animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .skills-tabs {
            flex-direction: grid;
            flex-wrap: wrap;
          }
          .tab-btn {
            font-size: 0.8rem;
            padding: 0.5rem 0.75rem;
            flex: unset;
            width: calc(50% - 0.5rem);
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
=======
import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "C++", "HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "JIRA", "VS Code"],
  },
  {
    category: "Concepts",
    skills: ["OOP", "Data Structures", "Algorithms", "AI / Computer Vision"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          SKILLS & KNOWLEDGE
        </motion.h2>

        {/* Categories */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsData.map(({ category, skills }) => (
            <motion.div
              key={category}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }} // slight lift for the whole box
              className="bg-gray-700 rounded-2xl shadow-xl border border-gray-600 p-8 transition-all duration-300 hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]"
            >
              {/* Category Title */}
              <h3 className="text-3xl font-semibold text-gray-200 border-b border-gray-600 pb-3 mb-6">
                {category}
              </h3>

              {/* Skills Grid */}
              <motion.div
                className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr"
                variants={containerVariants}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.97 }}
                    variants={itemVariants}
                    className="relative group px-6 py-4 rounded-xl text-center font-medium shadow-md transition-all duration-300 ease-out
                               bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                  >
                    {/* Text with Glow */}
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
                      {skill}
                    </span>

                    {/* Card Glow on Hover */}
                    <div className="absolute inset-0 rounded-xl group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-shadow duration-300 pointer-events-none"></div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
>>>>>>> c79e624130fa8545b868558bc55dbcea9ee44fb1
