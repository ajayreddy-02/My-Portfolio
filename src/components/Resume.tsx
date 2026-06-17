import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import resumePDF from "../asserts/Off_Ajay Resume.pdf";
import resumePreview from "../asserts/resume preview.jpeg";

export default function Resume() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="resume" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <div className="w-full h-[700px] rounded-xl overflow-hidden border border-primary-500/20 shadow-xl">
                <div className="overflow-hidden rounded-2xl shadow-2xl border border-primary-500/20">
    <img
        src={resumePreview}
        alt="Resume Preview"
        className="w-full transition-transform duration-500 hover:scale-105"
    />
</div>
            </div>

            <h3 className="text-xl font-bold text-dark-50 mb-2">Chiguru Ajay Kumar Reddy</h3>
            <p className="text-dark-400 mb-8">Software Engineer • Full Stack Developer • AI/ML Enthusiast • Cloud Computing</p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-primary-500/25"
              >
                <FaEye size={16} /> View Resume
              </motion.a>
              <motion.a
                href={resumePDF}
                download="Chiguru_Ajay_Kumar_Reddy_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 glass hover-glow rounded-xl font-medium text-dark-200 transition-colors"
              >
                <FaDownload size={16} /> Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
