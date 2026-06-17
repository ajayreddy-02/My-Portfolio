import { motion } from 'framer-motion';
import { achievements } from '../utils/data';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';

function CounterItem({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center hover-glow">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-dark-300 text-sm font-medium">{label}</div>
    </div>
  );
}

export default function Achievements() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="achievements" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <CounterItem label={a.label} value={a.value} suffix={a.suffix} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
