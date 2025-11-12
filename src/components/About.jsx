/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useThemeStore } from "../store/themeStore";
import Stack from "./Stack";
import * as PhotoAssets from "../assets/index";

const About = () => {
  const [cardSize, setCardSize] = useState({ width: 300, height: 300 });
  const { darkMode } = useThemeStore();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardSize({ width: 200, height: 200 });
      } else {
        setCardSize({ width: 300, height: 300 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    {
      id: 1,
      img: PhotoAssets.fotoCasual,
    },
    {
      id: 2,
      img: PhotoAssets.fotoTk,
    },
    {
      id: 3,
      img: PhotoAssets.fotoCv,
    },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-20  flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`text-3xl sm:text-4xl md:text-5xl text-center font-bold md:mb-28 mb-16 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Who am I?
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center mb-10"
          >
            <div className="pointer-events-auto">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={cardSize}
                cardsData={images}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className={`w-full md:w-1/2 space-y-4 font-serif max-w-lg ${
              darkMode ? "text-slate-300" : "text-black"
            } leading-relaxed z-30`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Hello, I'm{" "}
              <span className="text-orange-400">Muhammad Farhaan</span>
            </h3>

            <p>
              I’m a <span className="text-orange-400">Fullstack Developer</span>{" "}
              who loves building modern, scalable web apps that look great and
              work even better. Over time, I’ve learned how to balance clean
              design with strong engineering on both the frontend and backend.
            </p>
            <p>
              On the frontend, I mainly use React and TypeScript to build
              smooth, responsive, and user-friendly interfaces. For the backend,
              I work with Node.js, Express, and MongoDB to create fast and
              reliable APIs that scale.
            </p>
            <p>
              I’m always exploring new technologies and better ways to code.
              Recently, I’ve been diving into Golang to build high-performance
              backend services and broaden my development toolkit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
