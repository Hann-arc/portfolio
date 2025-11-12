import About from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Galaxy from "./components/Galaxy";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { useThemeStore } from "./store/themeStore";
import { Toaster } from "sonner";

function App() {
  const { darkMode } = useThemeStore();

  return (
    <div
      className={`relative ${
        darkMode ? "bg-black" : "bg-white"
      } w-full min-h-screen`}
    >
      <div className="fixed inset-0 z-0">
        <Galaxy />
      </div>

      <div
        className={`flex flex-col inset-0 z-10 w-full overflow-hidden ${
          darkMode ? "text-white" : "text-black"
        } pointer-events-none`}
      >
        <div className="pointer-events-auto">
          <Navbar />
        </div>

        <div className="z-10 h-screen w-full overflow-hidden" id="hero">
          <Hero />
        </div>

        <div className="min-h-screen w-full overflow-hidden">
          <About />
        </div>

        <div className="min-h-screen w-full overflow-hidden">
          <Projects />
        </div>

        <div className="min-h-screen w-full overflow-hidden">
          <Skills />
        </div>

        <div className="min-h-screen w-full overflow-hidden">
          <Contact />
        </div>
        <div className="z-30 w-full overflow-hidden">
          <Footer />
        </div>
      </div>

      <Toaster
        position="bottom-right"
        richColors
        expand
        toastOptions={{
          style: {
            background: darkMode ? "#111" : "#fff",
            color: darkMode ? "#fff" : "#000",
            border: darkMode ? "1px solid #333" : "1px solid #ddd",
          },
        }}
      />
    </div>
  );
}

export default App;
