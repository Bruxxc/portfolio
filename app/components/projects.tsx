"use client";

import { motion } from "framer-motion";
import styles from "../styles/projects.module.css";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./resources/sectionwrapper";

// Aseguramos que los proyectos tengan todas las propiedades necesarias
const projects = [
  {
    name: "EFIKO",
    description: "Página web para Gestoría en Impacto Ambiental.",
    tags: [
      { name: "React", color: "text-blue-400" },
      { name: "Node.js", color: "text-green-500" },
      { name: "JavaScript", color: "text-yellow-400" }
    ],
    image: "/assets/img/efiko.webp", // Ruta de imagen corregida
    page_link: "https://green-metric-phi.vercel.app",
    source_code_link: "https://github.com/Bruxxc/GreenMetric",
  },
  {
    name: "Atlántico Solution",
    description: "Página web para Gestoría en Extranjería.",
    tags: [
      { name: "WordPress", color: "text-blue-400" },
      { name: "Elementor", color: "text-purple-500" },
    ],
    image: "/assets/img/atlanticoSolution.webp", // Ruta de imagen corregida
    page_link: "https://atlanticosolution.com/",
    source_code_link: "https://github.com/miusuario/proyecto2",
  },
  {
    name: "DynastyShop",
    description: "E-commerce Proyecto final de curso.",
    tags: [
      { name: "React", color: "text-blue-400" },
      { name: "Node.js", color: "text-green-500" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "Firebase", color: "text-red-500" }
    ],
    image: "/assets/img/dShop.webp", // Ruta de imagen corregida
    page_link : "https://coder-react-inky.vercel.app/",
    source_code_link: "https://github.com/Bruxxc/CoderReact",
  },
];

type Tag = {
  name: string;
  color: string;
};

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <motion.div className={`w-full md:w-[360px]`} variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
      <div className={`bg-[#161031] p-5 rounded-2xl w-full ${styles.project_card}`}>
        <div className="relative w-full h-[230px]">
          <img
            src={image} 
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black bg-opacity-50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src="/assets/icons/github_icon.png" 
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-gray-300 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
  <div className={`${styles.projects_main_container} mx-auto`}>
    <motion.div variants={textVariant()}>
      <h2 className={`${styles.skills_title} pl-2 text-center md:text-left`}>
        PROJECTS<span className={styles.dot}>.</span>
      </h2> 
      <p className="text-gray-500 mt-2 text-xl p-2 text-center md:text-left">
        Algunos de mis trabajos realizados
      </p>
    </motion.div>

    <div className="pt-2 flex flex-wrap gap-10 justify-center md:justify-start">
  {projects.map((project, index) => (
    <a 
      key={`project-${index}`} 
      href={project.page_link} // suponiendo que cada proyecto tiene un link
      target="_blank" 
      rel="noopener noreferrer"
    >
      <ProjectCard index={index} {...project} />
    </a>
  ))}
</div>

  </div>
  );
};

export default SectionWrapper(Works, "projects");
