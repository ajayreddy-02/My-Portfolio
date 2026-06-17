import { motion } from 'framer-motion';
import { certifications } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiAward, FiExternalLink } from 'react-icons/fi';

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certificates" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-5 hover-glow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <FiAward size={20} />
                </div>
                <span className="text-dark-500 text-xs font-medium">{cert.date}</span>
              </div>

              <h3 className="text-dark-50 font-semibold text-sm mb-2 line-clamp-2">{cert.title}</h3>
              <p className="text-dark-400 text-xs mb-4">{cert.org}</p>

              <div className="w-full h-24 rounded-xl bg-gradient-to-br from-primary-500/10 to-primary-300/10 flex items-center justify-center mb-4 border border-primary-500/10">
                <FiAward size={32} className="text-primary-400/40" />
              </div>

              <motion.a
                href={cert.url}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-500/10 text-primary-400 text-xs font-medium hover:bg-primary-500/20 transition-colors"
              >
                <FiExternalLink size={12} /> View Credential
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
