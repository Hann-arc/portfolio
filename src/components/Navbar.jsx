/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useThemeStore } from "../store/themeStore";
import { Logo } from "../assets";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useThemeStore();
  const [active, setActive] = useState("hero");
  const { scrollY } = useScroll();
  const isScrollingRef = useRef(false);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    setIsOpen(false);
    setActive(id);
    isScrollingRef.current = true;
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const currentScroll = scrollY.get();
      let currentSection = "hero";

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop } = element;
          if (currentScroll >= offsetTop - 100) {
            currentSection = item.id;
          }
        }
      }

      setActive(currentSection);
    };

    const unsubscribe = scrollY.on("change", handleScroll);

    handleScroll();

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <nav className="relative">
      <div className="hidden md:flex w-full z-50 fixed justify-center">
        <div
          className={`flex rounded-2xl w-fit px-2 py-1 mt-5 items-center ${
            darkMode ? "bg-gray-400" : "bg-black"
          }`}
        >
          <div className="relative flex gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                  scrollToSection(item.id);
                }}
                className={`relative z-10 px-3 py-1 rounded-xl font-medium transition-colors ${
                  active === item.id
                    ? darkMode
                      ? "text-white"
                      : "text-black"
                    : darkMode
                    ? "text-black"
                    : "text-white"
                }`}
              >
                {active === item.id && (
                  <motion.div
                    layoutId="nav-active-bg"
                    className={`absolute inset-0 ${
                      darkMode ? "bg-black" : "bg-white"
                    } rounded-2xl`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </div>

          <div className="ml-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 ${darkMode ? "text-black" : "text-white"}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden fixed top-4 left-0 right-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <motion.div
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-10 h-10" 
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && scrollToSection("hero")}
            aria-label="Go to home"
          >
            <img 
              src={Logo} 
              className="w-full h-full object-contain"
              alt="Logo" 
            />
          </motion.div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg  ${
                darkMode ? "text-white" : "text-black"
              }   `}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-slate-900 ${
                darkMode ? "text-white" : "text-black"
              }`}
              aria-label="Toggle menu"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`fixed inset-0 z-40 flex flex-col items-center justify-center ${
                darkMode
                  ? "bg-slate-900 text-slate-300"
                  : "bg-white text-slate-800"
              }`}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-5 text-3xl"
                aria-label="Close menu"
              >
                <FiX />
              </button>

              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setActive(item.id);
                    setIsOpen(false);
                    scrollToSection(item.id);
                  }}
                  className={`text-2xl font-semibold my-3 transition-colors duration-300 ${
                    active === item.id
                      ? darkMode
                        ? "text-orange-400"
                        : "text-orange-400"
                      : darkMode
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};