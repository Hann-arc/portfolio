/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import TextType from "./TextType";
import DecryptedText from "./DecryptedText";
import { useThemeStore } from "../store/themeStore";
import { AiBot } from "./AiBot";

export const Hero = () => {
  const { darkMode } = useThemeStore();

 
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-center justify-between gap-12"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col space-y-6 max-w-lg lg:max-w-xl"
        >
          <DecryptedText
            text="Fullstack Developer"
            speed={100}
            animateOn="view"
            sequential={true}
            revealDirection="start"
            maxIterations={11}
            parentClassName="all-letters"
            encryptedClassName={`text-4xl sm:text-5xl font-bold ${
              darkMode ? "text-white" : "text-black"
            }`}
            className={`text-4xl sm:text-5xl font-bold ${
              darkMode ? "text-white" : "text-black"
            }`}
          />

          <p className={`text-lg sm:text-xl ${darkMode ? "text-white" : "text-black"}`}>
            Hi, I’m{" "}
            <span className="text-orange-400 font-bold">Muhammad Farhaan.</span> A{" "}
            <span className="text-orange-400 font-bold">Fullstack Developer</span>{" "}
            passionate about creating intuitive and impactful digital experiences.
            I combine creativity, problem-solving, and a user-focused mindset to
            bring ideas to life through code.
          </p>

         
            <TextType
              text={[
                "Hii, welcome to my hut!",
              ]}
              typingSpeed={100}
              pauseDuration={0}
              className="text-slate-500 italic text-base"
              showCursor={true}
              cursorCharacter="_"
            />

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="hidden md:flex w-48 h-60 sm:w-60 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-96"
        >
          <AiBot />
        </motion.div>
      </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col items-center gap-2 absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <p className="font-bold text-slate-500 text-sm">Scroll down</p>
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-slate-500 rounded-full"
            />
          </div>
        </motion.div>
    </section>
  );
};