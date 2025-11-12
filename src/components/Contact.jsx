/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { useThemeStore } from "../store/themeStore";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const { darkMode } = useThemeStore();
  const form = useRef();
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message ");
        }
      )
      .finally(() => setLoading(false));
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub size={24} />,
      url: "https://github.com/Hann-arc",
      color:  "hover:text-slate-400",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin size={24} />,
      url: "https://www.linkedin.com/in/muhamad-farhaan",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: <FiMail size={24} />,
      url: "mailto:muhammadfarhaan911@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section id="contact" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold text-center mb-10 md:mb-20 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Get in Touch
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-8 md:w-1/2"
          >
            {" "}
            <h3 className="text-2xl font-bold z-20">Let's Connect</h3>
            <p
              className={`${
                darkMode ? "text-slate-400" : "text-black"
              } leading-relaxed z-20`}
            >
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say
              hello, feel free to reach out!
            </p>
            <div
              className="space-y-4 pointer-events-auto z-30"
              ref={containerRef}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`flex w-fit items-center gap-4 transition-colors ${link.color}`}
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col md:w-1/2 z-30 pointer-events-auto"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className={`flex flex-col space-y-6 ${
                darkMode ? "text-slate-400" : "text-black"
              }`}
            >
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-transparent border-2 ${
                    darkMode ? "border-slate-400" : "border-black"
                  }`}
                  placeholder="Your Subject"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-transparent border-2 ${
                    darkMode ? "border-slate-400" : "border-black"
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg bg-transparent border-2 resize-none overflow-y-scroll
                 ${
                   darkMode ? "border-slate-400" : "border-black"
                 } hide-scrollbar`}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full px-8 py-4 bg-transparent border-2 ${
                  darkMode ? "border-slate-400" : "border-black"
                } rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 group cursor-pointer`}
              >
                {loading ? "Sending..." : "Send Message"}
                <FiSend className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
