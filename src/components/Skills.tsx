import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('Programming');
  const active = skillCategories.find((c) => c.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'glass text-dark-300 hover:text-dark-50 hover-glow'
              }`}
            >
              {cat.category}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 space-y-6">
            <h3 className="text-xl font-bold gradient-text mb-6">{activeCategory}</h3>
            {active?.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-dark-200 font-medium text-sm">{skill.name}</span>
                  <span className="text-primary-400 font-semibold text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-dark-700/50 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-300 shadow-sm shadow-primary-500/30"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              whileHover={{ y: -3 }}
              className="glass rounded-xl p-4 text-center hover-glow cursor-pointer"
              onClick={() => setActiveCategory(cat.category)}
            >
              <div className="text-2xl font-bold gradient-text">{cat.skills.length}</div>
              <div className="text-dark-400 text-xs mt-1">{cat.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
