import { motion } from 'framer-motion';
import { aboutCards } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary-500" />
                <span className="text-primary-400 font-semibold text-lg">Computer Science Engineering Student</span>
              </div>

              <p className="text-dark-300 leading-relaxed">
                I'm a passionate <span className="text-dark-50 font-medium">Computer Science Engineering student</span> graduating in <span className="text-dark-50 font-medium">2026</span>, with a strong interest in Full Stack Development, Artificial Intelligence, Backend Engineering, Cloud Computing, and Problem Solving.
              </p>

              <p className="text-dark-300 leading-relaxed">
                I enjoy building <span className="text-dark-50 font-medium">scalable applications</span>, learning modern technologies, solving coding problems, and continuously improving my technical skills to create impactful solutions.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {['Full Stack Development', 'Artificial Intelligence', 'Backend Engineering', 'Cloud Computing', 'Problem Solving'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-primary-500/10 text-primary-400 text-sm font-medium border border-primary-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {aboutCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-5 text-center hover-glow cursor-default"
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="text-dark-50 font-semibold text-sm mb-1">{card.title}</h3>
                <p className="text-dark-400 text-xs">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
