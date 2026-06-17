import { motion } from 'framer-motion';
import { experiences } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiBriefcase, FiAward, FiBookOpen, FiZap } from 'react-icons/fi';

const typeIcons: Record<string, React.ReactNode> = {
  Internship: <FiBriefcase size={20} />,
  Training: <FiBookOpen size={20} />,
  Certification: <FiAward size={20} />,
  Learning: <FiZap size={20} />,
};

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 hover-glow group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  {typeIcons[exp.type] || <FiBriefcase size={20} />}
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-0.5 rounded-md bg-primary-500/10 text-primary-400 text-xs font-medium mb-2">
                    {exp.type}
                  </span>
                  <h3 className="text-dark-50 font-bold mb-1">{exp.title}</h3>
                  <p className="text-dark-300 text-sm mb-2">{exp.organization}</p>
                  <p className="text-dark-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
