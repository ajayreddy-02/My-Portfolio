import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiHeart } from 'react-icons/fi';
import { personalInfo, navLinks } from '../utils/data';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative border-t border-dark-700/50">
      <div className="container-custom section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold gradient-text mb-3">{personalInfo.name.split(' ').slice(0, 2).join(' ')}</h3>
            <p className="text-dark-400 text-sm leading-relaxed">{personalInfo.intro}</p>
          </div>

          <div>
            <h4 className="text-dark-50 font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-dark-400 text-sm hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-dark-50 font-semibold mb-3">Connect</h4>
            <div className="flex gap-3 flex-wrap">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass text-dark-400 hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-dark-400 text-sm">{personalInfo.email}</p>
              <p className="text-dark-400 text-sm">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm flex items-center gap-1">
            Made with <FiHeart size={14} className="text-red-400" /> by {personalInfo.name}
          </p>
          <p className="text-dark-600 text-xs">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 rounded-xl bg-primary-500 text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600 transition-colors z-30"
            aria-label="Back to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
