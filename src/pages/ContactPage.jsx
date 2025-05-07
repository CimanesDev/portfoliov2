import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const contacts = [
  {
    icon: <FaEnvelope size={22} />, label: 'Email', value: 'jmcimanes@up.edu.ph', link: 'mailto:jmcimanes@up.edu.ph',
  },
  {
    icon: <FaLinkedin size={22} />, label: 'LinkedIn', value: 'linkedin.com/in/joshcimanes', link: 'https://linkedin.com/in/joshcimanes',
  },
  {
    icon: <FaGithub size={22} />, label: 'GitHub', value: 'github.com/CimanesDev', link: 'https://github.com/CimanesDev',
  },
];

export default function ContactPage() {
  return (
    <div className="flex justify-center py-10 px-2 sm:px-0">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-[#161b22] dark:bg-white border border-github-border dark:border-gray-200 rounded-xl p-5 sm:p-10 w-full max-w-2xl mx-auto shadow-lg flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-white dark:text-gray-900 mb-6 flex items-center gap-2 justify-center">Contact</h2>
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.link}
              target={c.link.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, backgroundColor: '#23272e11' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 px-4 py-3 rounded-lg transition-colors text-github-text dark:text-gray-900 bg-transparent hover:bg-[#23272e0a] dark:hover:bg-gray-100/60 focus:outline-none w-full"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span className="flex-shrink-0 text-[#58a6ff] dark:text-blue-600">{c.icon}</span>
              <span className="font-medium text-base break-all">{c.value}</span>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </div>
  );
} 