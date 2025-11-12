/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ChatlnPort, CirclePort, DeAnimePort, LakoePort } from "../assets";
import { useThemeStore } from "../store/themeStore";
import InfiniteMenu from "./InfiniteMenu";

export const Projects = () => {
  const { darkMode } = useThemeStore();
  const items = [
    {
      image: ChatlnPort,
      link: "https://chatln.vercel.app",
      title: "ChatIn",
      description: "A real time chat aplication built with MERN stack + socket.io",
    },
    {
      image: LakoePort,
      link: "https://lakoe-app.vercel.app/",
      title: "Lakoe",
      description: "An e-commerce platform, buit with React, express, PostgreeSql, and prisma ORM",
    },
    {
      image: CirclePort,
      link: "https://circle-fe-tau.vercel.app/",
      title: "Circle",
      description: "A social media platform, buit with React, express, PostgreeSql, and prisma ORM",
    },
    {
      image: DeAnimePort,
      link: "",
      title: "De-Anime",
      description: "A streaming anime platform, built with React",
    },
  ];

  return (
    <section id="projects" className="w-full min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mx-auto px-4 flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className={`text-4xl md:text-5xl z-40 font-bold mb-12 text-center ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          What I’ve Built
        </motion.h1>
        <div className="w-full pointer-events-auto" style={{ height: "600px", position: "relative" }}>
          <InfiniteMenu items={items} />
        </div>
      </motion.div>
    </section>
  );
};