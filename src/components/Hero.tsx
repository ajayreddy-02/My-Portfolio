import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaProjectDiagram, FaHandshake, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../utils/data';
import profilePic from "../asserts/portfolio profile.jpeg";
import resume from "../asserts/Off_Ajay Resume.pdf";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = personalInfo.typingTexts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % personalInfo.typingTexts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-32">
      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="text-xl md:text-2xl font-medium text-dark-300 mb-6 h-8">
              <span>{displayText}</span>
              <span className="animate-blink border-r-2 border-primary-400 ml-1">&nbsp;</span>
            </div>

            <p className="text-dark-400 text-lg max-w-xl mb-8 leading-relaxed">
              {personalInfo.intro}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href={resume}
                download="Chiguru_Ajay_Kumar_Reddy_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-primary-500/25"
              >
                <FaDownload size={16} /> Download My Resume
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 glass hover-glow rounded-xl font-medium text-dark-200 transition-colors"
              >
                <FaProjectDiagram size={16} /> View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 glass hover-glow rounded-xl font-medium text-dark-200 transition-colors"
              >
                <FaHandshake size={16} /> Hire Me
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 glass hover-glow rounded-xl font-medium text-dark-200 transition-colors"
              >
                <FaEnvelope size={16} /> Contact Me
              </motion.a>
            </div>

            <div className="flex gap-4">
              {personalInfo.socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl glass hover-glow text-dark-400 hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-300/20 rounded-full blur-2xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary-500/30 shadow-2xl shadow-primary-500/20">
                <img
                    src={profilePic}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 border-2 border-dashed border-primary-500/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
