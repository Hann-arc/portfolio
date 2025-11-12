/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useThemeStore } from "../store/themeStore";

export const Footer = () => {
  const { darkMode } = useThemeStore();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-12 px-6 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p
            className={`text-sm font-medium ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Muhammad Farhaan
          </p>
          <p
            className="text-xs mt-1 text-slate-400" 
          >
            Fullstack Developer 
          </p>
        </div>

        <div className="text-center md:text-right">
          <p
            className={`text-xs ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            © {new Date().getFullYear()} Muhammad Farhaan. All rights reserved.
          </p>
          <p
            className="text-xs mt-1 text-slate-400"
          >
            Open to collaboration 
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
