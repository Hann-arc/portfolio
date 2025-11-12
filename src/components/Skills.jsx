/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGo,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useThemeStore } from "../store/themeStore";
import FlowingMenu from "./FlowingMenu";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";

export const Skills = () => {
  const { darkMode } = useThemeStore();
  const demoItems = [
    {
      text: "Frontend",
      marqueeContent: [
        { text: "React", icon: SiReact },
        { text: "Next.js", icon: SiNextdotjs },
        { text: "TypeScript", icon: SiTypescript },
        { text: "Css", icon: FaCss3 },
        { text: "Html", icon: FaHtml5 },
        { text: "JavaScript", icon: SiJavascript },
        { text: "TailwindCSS", icon: SiTailwindcss },
      ],
    },
    {
      text: "Backend",
      marqueeContent: [
        { text: "Node.js", icon: SiNodedotjs },
        { text: "Express", icon: SiExpress },
        { text: "Prisma", icon: SiPrisma },
        { text: "PostgreSQL", icon: SiPostgresql },
        { text: "MongoDB", icon: SiMongodb },
        { text: "Golang", icon: SiGo },
      ],
    },
    {
      text: "Tools & Others",
      marqueeContent: [
        { text: "Git", icon: SiGit },
        { text: "Docker", icon: SiDocker },
        { text: "GitHub", icon: SiGithub },
        { text: "Figma", icon: SiFigma },
        { text: "Postman", icon: SiPostman },
        { text: "VS Code", icon: FiCode },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 min-h-screen flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="items-center justify-center flex"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          What I Work With
        </motion.h1>
      </motion.div>
      <div
        style={{ height: "600px", position: "relative" }}
        className={`${
          darkMode ? " text-black" : "text-white"
        } pointer-events-auto`}
      >
        <FlowingMenu items={demoItems} darkMode={darkMode} />
      </div>
    </section>
  );
};