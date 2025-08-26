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
