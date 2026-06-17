import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = projects.filter((p) => {
    const matchCat = filter === 'All' || p.category === filter;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'glass text-dark-300 hover:text-dark-50 hover-glow'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-xl glass text-dark-200 text-sm placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 w-full sm:w-56 bg-transparent"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter + search}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group glass rounded-2xl overflow-hidden hover-glow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-primary-500/80 text-white text-xs font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark-50 mb-1">{project.title}</h3>
                  <p className="text-primary-400 text-sm font-medium mb-3">{project.subtitle}</p>
                  <p className="text-dark-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-primary-500/10 text-primary-300 text-xs border border-primary-500/20">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-dark-300 hover:text-primary-400 text-sm font-medium transition-colors"
                    >
                      <FaGithub size={14} /> Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 text-sm font-medium transition-colors"
                    >
                      <FaExternalLinkAlt size={12} /> Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
