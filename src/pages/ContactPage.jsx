import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex justify-center py-10 px-2 sm:px-0">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-[#161b22] dark:bg-white border border-github-border dark:border-gray-200 rounded-xl p-5 sm:p-10 w-full max-w-2xl mx-auto shadow-lg"
      >
        <h2 className="text-2xl font-bold text-white dark:text-gray-900 mb-8 flex items-center gap-2 justify-center">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#21262d] dark:bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 text-white dark:text-gray-900">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#30363d] dark:bg-gray-200">
                  <Mail size={20} className="text-blue-500" />
                </div>
                <a href="mailto:jmcimanes@up.edu.ph" className="text-white dark:text-gray-900 hover:text-blue-500 dark:hover:text-blue-600 transition-colors">
                  jmcimanes@up.edu.ph
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#30363d] dark:bg-gray-200">
                  <MapPin size={20} className="text-red-500" />
                </div>
                <span className="text-white dark:text-gray-900">Manila, Philippines</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#30363d] dark:bg-gray-200">
                  <Linkedin size={20} className="text-blue-600" />
                </div>
                <a
                  href="https://linkedin.com/in/cimanesdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white dark:text-gray-900 hover:text-blue-600 dark:hover:text-blue-700 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#30363d] dark:bg-gray-200">
                  <Github size={20} className="text-gray-200 dark:text-gray-800" />
                </div>
                <a
                  href="https://github.com/CimanesDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white dark:text-gray-900 hover:text-gray-300 dark:hover:text-gray-700 transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#21262d] dark:bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 text-white dark:text-gray-900">Get in Touch</h3>
            <p className="text-white dark:text-gray-900 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-[#30363d] dark:bg-gray-200">
                <h4 className="font-medium text-white dark:text-gray-900 mb-2">Available for</h4>
                <ul className="list-disc list-inside text-white dark:text-gray-900 space-y-1">
                  <li>Full-time opportunities</li>
                  <li>Freelance projects</li>
                  <li>Collaborations</li>
                  <li>Open source contributions</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 