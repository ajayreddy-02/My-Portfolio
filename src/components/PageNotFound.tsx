import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</h1>
        </motion.div>
        <p className="text-dark-300 text-lg mb-8">Page not found</p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors"
        >
          <FiHome size={18} /> Go Home
        </motion.a>
      </div>
    </div>
  );
}
