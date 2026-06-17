import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { BsSun, BsMoon } from 'react-icons/bs';
import { navLinks, personalInfo } from '../utils/data';
import { useActiveSection, useScrollProgress } from '../hooks/useScrollReveal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const active = useActiveSection();
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
    document.documentElement.classList.toggle('light', isDark);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-1">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3 glass shadow-lg shadow-dark-900/20'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between px-6">
          <motion.a
            href="#home"
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {personalInfo.name.split(' ').slice(0, 2).join(' ')}
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                  active === link.href.slice(1)
                    ? 'text-primary-400'
                    : 'text-dark-300 hover:text-dark-50'
                }`}
              >
                {link.name}
                {active === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary-500/10 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg glass hover-glow text-dark-300 hover:text-primary-400 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <BsSun size={18} /> : <BsMoon size={18} />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass text-dark-300 hover:text-primary-400 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <BsSun size={16} /> : <BsMoon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg glass text-dark-300 hover:text-primary-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden"
            >
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      active === link.href.slice(1)
                        ? 'text-primary-400 bg-primary-500/10'
                        : 'text-dark-300 hover:text-dark-50 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
