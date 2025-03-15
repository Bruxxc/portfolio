"use client"

import { div } from 'framer-motion/client';
import BallCanvas from './resources/ball';
import SectionWrapper from "./resources/sectionwrapper";



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
  ];
  



const Skills = () => {



    
    return (

        <div className="z-30">

            <div className="flex flex-row flex-wrap justify-center gap-10">
                {skills.map((skill) => (
                    <div className="w-28 h-28" key={skill.name}>
                        <BallCanvas icon={skill.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Skills, "");