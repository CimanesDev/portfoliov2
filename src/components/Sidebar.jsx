import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Languages, Download, Coffee } from 'lucide-react';
import profilePic from '../assets/pic.png';

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full md:w-[340px] max-w-full md:max-w-[340px] flex flex-col items-center p-6 sm:p-10 min-h-[auto] mx-auto md:mx-0 mb-4 md:mb-0 bg-transparent"
      style={{ background: 'none', border: 'none', boxShadow: 'none' }}
    >
      <img
        src={profilePic}
        alt="Josh Bradley Cimanes"
        className="w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover mb-4 border-4 border-[#58a6ff] dark:border-blue-400 shadow-md"
      />
      <div className="text-2xl font-bold text-white dark:text-gray-900 mb-2 text-center">Josh Bradley Cimanes</div>
      <div className="text-base text-github-text dark:text-gray-700 mb-2 text-center">Computer Science @ UP Manila</div>
      <div className="hidden md:flex flex-col gap-2 w-full mb-6">
        <div className="flex items-center gap-2 text-base text-github-text dark:text-gray-700"><Mail size={18} /> jmcimanes@up.edu.ph</div>
        <div className="flex items-center gap-2 text-base text-github-text dark:text-gray-700"><MapPin size={18} /> Manila, Philippines</div>
        <div className="flex items-center gap-2 text-base text-github-text dark:text-gray-700"><Linkedin size={18} /> <a href="https://linkedin.com/in/cimanesdev" className="hover:underline focus:underline transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
        <div className="flex items-center gap-2 text-base text-github-text dark:text-gray-700"><Github size={18} /> <a href="https://github.com/CimanesDev" className="hover:underline focus:underline transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a></div>
        <div className="flex items-center gap-2 text-base text-github-text dark:text-gray-700">
          <Coffee size={18} />
          <a href="https://buymeacoffee.com/cimanesdev" target="_blank" rel="noopener noreferrer" className="hover:underline focus:underline transition-colors">Buy me a coffee</a>
        </div>
        <div className="flex items-center gap-2 text-base text-github-text dark:text-gray-700">
          <Download size={18} />
          <a href="/public/resume/Josh Bradley Cimanes CV.pdf" download className="hover:underline focus:underline transition-colors">Download CV</a>
        </div>
        
      </div>
      <div className="hidden md:block w-full mb-2">
        <div className="flex items-center gap-2 mb-2 text-github-text dark:text-gray-700 font-semibold text-base">
          <Languages size={18} /> Languages
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#21262d] dark:bg-gray-200 text-xs text-white dark:text-gray-800 px-3 py-1 rounded-full">Native Filipino</span>
          <span className="bg-[#21262d] dark:bg-gray-200 text-xs text-white dark:text-gray-800 px-3 py-1 rounded-full">Fluent English</span>
          <span className="bg-[#21262d] dark:bg-gray-200 text-xs text-white dark:text-gray-800 px-3 py-1 rounded-full">Conversational Mandarin (HSK 4/HSKK)</span>
        </div>
      </div>
    </motion.aside>
  );
} 