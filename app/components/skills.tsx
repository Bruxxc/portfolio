"use client"

import SkillItem from './skillBall';
import SectionWrapper from "./resources/sectionwrapper";
import styles from "../styles/skills.module.css";
import { motion } from "framer-motion";
import { textVariant} from "../utils/motion";

const skills = [
    {
      name: "HTML 5",
      icon: "assets/icons/html.png",
    },
    {
      name: "CSS 3",
      icon: "assets/icons/css.png",
    },
    {
      name: "JavaScript",
      icon: "assets/icons/javascript.png",
    },
    {
      name: "TypeScript",
      icon: "assets/icons/typescript.png",
    },
    {
      name: "React JS",
      icon: "assets/icons/reactjs.png",
    },
    {
      name: "Tailwind CSS",
      icon: "assets/icons/tailwind.png",
    },
    {
      name: "Node JS",
      icon: "assets/icons/nodejs.png",
    },
    {
      name: "MongoDB",
      icon: "assets/icons/mongodb.png",
    },
    {
      name: "git",
      icon: "assets/icons/github_icon.png",
    },
    {
      name: "figma",
      icon: "assets/icons/figma.png",
    },
    {
      name : "python",
      icon: "assets/icons/python.png",
    },
    {
      name : "java",
      icon: "assets/icons/java.png",
    },
    {
      name : "postgre",
      icon :"assets/icons/postgre.png",
    }
  ];
  



const Skills = () => {



    
    return (

      <div className={styles.skills_main_container}>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.skills_title} pl-2 text-center md:text-left`}>
            SKILLS<span className={styles.dot}>.</span>
          </h2>
          <p className="text-gray-500 mt-2 text-xl p-2 text-center md:text-left">
            Conocimientos y tecnologías que domino
          </p>
        </motion.div>

        <div className={`${styles.skills_section} rounded-4xl p-8`}>
          <div className="z-30">
            <div className="flex flex-row flex-wrap justify-center gap-10">
              {skills.map((skill) => {
                return (
                  <SkillItem key={skill.name} skill={skill}/>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
};

export default SectionWrapper(Skills, "skills");