import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi';
import { personalInfo } from '../utils/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.currentTarget,
        'YOUR_PUBLIC_KEY'
      );
      setSent(true);
      (e.target as HTMLFormElement).reset();
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: '#' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: 'https://linkedin.com/in/' },
    { icon: FiGithub, label: 'GitHub', value: 'GitHub Profile', href: 'https://github.com/' },
    { icon: FiGlobe, label: 'Portfolio', value: 'Portfolio Website', href: '#' },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 glass rounded-2xl p-4 hover-glow group"
              >
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="text-dark-500 text-xs">{item.label}</div>
                  <div className="text-dark-200 text-sm font-medium">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-dark-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-600/50 text-dark-200 text-sm placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-dark-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-600/50 text-dark-200 text-sm placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-dark-300 text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-600/50 text-dark-200 text-sm placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label className="block text-dark-300 text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-600/50 text-dark-200 text-sm placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div>
                <label className="block text-dark-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-600/50 text-dark-200 text-sm placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              {sent && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-sm"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-white rounded-xl font-medium transition-colors shadow-lg shadow-primary-500/25"
              >
                {sending ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
