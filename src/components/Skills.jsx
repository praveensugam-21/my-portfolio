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

// Variants for container (stagger effect)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Variants for category and skill cards
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
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsData.map(({ category, skills }) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="space-y-10"
            >
              {/* Category Title */}
              <h3 className="text-3xl font-semibold text-gray-200 border-b border-gray-700 pb-3 mb-6">
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
                      boxShadow:
                        "0 8px 20px rgba(0,0,0,0.4), 0 0 8px rgba(255,255,255,0.1)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    variants={itemVariants}
                    className="bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-xl text-center font-medium shadow-md transition"
                  >
                    {skill}
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
