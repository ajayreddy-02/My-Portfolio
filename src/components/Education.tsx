import { motion } from 'framer-motion';
import { educationTimeline } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiBookOpen } from 'react-icons/fi';

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300 md:-translate-x-0.5" />

          {educationTimeline.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-800 -translate-x-2 md:-translate-x-2 z-10 shadow-lg shadow-primary-500/30" />

              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="glass rounded-2xl p-6 hover-glow"
                >
                  <div className="flex items-center gap-2 text-primary-400 text-sm font-medium mb-2">
                    <FiBookOpen size={16} />
                    {item.period}
                  </div>
                  <h3 className="text-lg font-bold text-dark-50 mb-1">{item.degree}</h3>
                  <p className="text-dark-300 text-sm mb-1">{item.field}</p>
                  <p className="text-dark-400 text-sm">{item.institution}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
