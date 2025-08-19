import React from "react";
import { motion } from "framer-motion";

// Skills grouped into categories
const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", color: "from-green-400 to-green-600" },
      { name: "C++", color: "from-blue-400 to-blue-600" },
      { name: "HTML", color: "from-orange-400 to-orange-600" },
      { name: "CSS", color: "from-blue-300 to-blue-500" },
      { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
      { name: "React.js", color: "from-cyan-400 to-cyan-600" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", color: "from-red-400 to-red-600" },
      { name: "JIRA", color: "from-indigo-400 to-indigo-600" },
      { name: "Visual Studio Code", color: "from-purple-400 to-purple-600" },
    ],
  },
  {
    category: "Concepts",
    skills: [
      { name: "OOP", color: "from-pink-400 to-pink-600" },
      { name: "Data Structures", color: "from-teal-400 to-teal-600" },
      { name: "Algorithms", color: "from-fuchsia-400 to-fuchsia-600" },
      { name: "AI / Computer Vision", color: "from-indigo-300 to-indigo-500" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", color: "from-blue-200 to-blue-400" },
      { name: "MongoDB", color: "from-green-300 to-green-500" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      {/* Everything centered with text-center */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Title - Centered with more bottom margin */}
        <motion.h2
          className="text-5xl font-bold mb-24 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Knowledge
        </motion.h2>

        <div className="space-y-20">
          {skillsData.map(({ category, skills }, categoryIndex) => (
            <motion.div
              key={category}
              className="w-full text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Title - Centered with more spacing */}
              <h3 className="text-3xl font-semibold mb-12 text-gray-200 text-center">
                {category}
              </h3>

              {/* Skills Container - Perfectly Centered */}
              <div className="flex justify-center w-full">
                <motion.div
                  className="bg-gradient-to-br from-gray-800 to-gray-700 p-10 rounded-3xl shadow-2xl border border-gray-600 max-w-4xl w-full"
                  whileHover={{
                    scale: 1.02,
                    boxShadow:
                      "0 25px 50px rgba(0,0,0,0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  {/* Skills Grid - Centered with proper spacing */}
                  <div className="flex flex-wrap justify-center items-center gap-6 text-center">
                    {skills.map(({ name, color }, skillIndex) => (
                      <motion.div
                        key={name}
                        className={`bg-gradient-to-r ${color} px-6 py-3 rounded-xl text-white font-semibold shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl text-center relative overflow-hidden`}
                        whileHover={{
                          scale: 1.15,
                          rotate: 2,
                          boxShadow:
                            "0 15px 35px rgba(0,0,0,0.4), 0 0 25px rgba(59, 130, 246, 0.8), 0 0 50px rgba(59, 130, 246, 0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        style={{
                          filter: "drop-shadow(0 0 0px rgba(59, 130, 246, 0))",
                          transition: "all 0.3s ease, filter 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.filter =
                            "drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.filter =
                            "drop-shadow(0 0 0px rgba(59, 130, 246, 0))";
                        }}
                      >
                        {/* Blue shine overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 -skew-x-12"
                          whileHover={{
                            opacity: [0, 0.3, 0],
                            x: ["-100%", "100%"],
                          }}
                          transition={{ duration: 0.6 }}
                        />

                        <span className="text-sm md:text-base font-medium text-center block relative z-10">
                          {name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
