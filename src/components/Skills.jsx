import React from "react";
import { motion } from "framer-motion";
import uiDesigner from "../assets/img/uiDesigner.png";
import frontendImg from "../assets/img/frontendImg.png";

const Skills = () => {
  return (
    <section className="skills py-24 px-4 bg-black text-white" id="skills">
      <h2 className="text-4xl font-bold ml-[700px] mb-14 primary-color">
        Skills
      </h2>
      <p className="text-center text-xl mb-12 text-gray-400">
        What Can I Do Best?
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        <SkillCard
          icon={
            <img
              src={uiDesigner}
              alt="uiDesigner Icon"
              className="w-12 h-12 mx-auto mb-4 bg-white p-2 rounded-full"
            />
          }
          title="UI Designer"
          description="As a Frontend Developer, I work closely with UI/UX and backend developers to deliver an optimized user experience. I create responsive and engaging using HTML, CSS, and JavaScript, and use frontend frameworks such as React JS and Next JS."
        />
        <SkillCard
          icon={
            <img
              src={frontendImg}
              alt="frontend Icon"
              className="w-12 h-12 mx-auto mb-4 bg-white p-2 rounded-full"
            />
          }
          title="Frontend Developer"
          description="As a Backend Developer, I master the Javascript programming language and understand popular backend frameworks such as Express.js or Nest JS. I can also use databases like MySQL, or MongoDB and have a strong understanding of RESTful API concepts."
        />
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xs text-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default Skills;
