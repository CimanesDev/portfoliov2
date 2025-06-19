import React from 'react';
import { motion } from 'framer-motion';

const programmingIcons = [
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        alt="Java"
        aria-label="Java"
        tabIndex={0}
        className="w-8 h-8 sm:w-12 sm:h-12 object-contain p-1"
      />
    ),
    label: 'Java',
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        alt="Python"
        aria-label="Python"
        tabIndex={0}
        className="w-8 h-8 sm:w-12 sm:h-12 object-contain p-1"
      />
    ),
    label: 'Python',
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        alt="HTML"
        aria-label="HTML"
        tabIndex={0}
        className="w-8 h-8 sm:w-12 sm:h-12 object-contain p-1"
      />
    ),
    label: 'HTML',
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        alt="CSS"
        aria-label="CSS"
        tabIndex={0}
        className="w-8 h-8 sm:w-12 sm:h-12 object-contain p-1"
      />
    ),
    label: 'CSS',
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        aria-label="JavaScript"
        tabIndex={0}
        className="w-8 h-8 sm:w-12 sm:h-12 object-contain p-1"
      />
    ),
    label: 'JavaScript',
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        aria-label="TypeScript"
        tabIndex={0}
        className="w-8 h-8 sm:w-12 sm:h-12 object-contain p-1"
      />
    ),
    label: 'TypeScript',
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        alt="React"
        aria-label="React"
        tabIndex={0}
        className="w-8 h-8 sm:w-12 sm:h-12 object-contain p-1"
      />
    ),
    label: 'React',
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        alt="TailwindCSS"
        aria-label="TailwindCSS"
        tabIndex={0}
        className="w-8 h-8 sm:w-12 sm:h-12 object-contain p-1"
      />
    ),
    label: 'TailwindCSS',
  },
];

export default function AboutPage() {
  return (
    <div className="flex justify-center py-8 px-2 sm:px-0">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-[#161b22] dark:bg-white border border-github-border dark:border-gray-200 rounded-xl p-4 sm:p-10 w-full max-w-2xl mx-auto shadow-lg"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-white dark:text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">About Me</h2>
        <p className="text-github-text dark:text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg">
          Hi! I'm <b>Josh Bradley Cimanes</b>, a Computer Science student at the University of the Philippines Manila (2023–2027), passionate about full-stack development, AI/ML, and building impactful tech solutions. I love collaborating in hackathons and student orgs, and have led and won several tech competitions. I enjoy learning new technologies and working on projects that help others.
        </p>
        <div className="mb-6">
          <div className="font-semibold text-white dark:text-gray-900 mb-2 text-base sm:text-lg">Programming Languages</div>
          <div className="grid grid-cols-4 sm:flex sm:flex-wrap gap-3 sm:gap-4 mb-4 justify-center">
            {programmingIcons.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15 }}
                className="flex flex-col items-center justify-center gap-1"
              >
                <span className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#23272e] dark:bg-gray-200 shadow border border-github-border dark:border-gray-200 mb-1">
                  {item.icon}
                </span>
                <span className="text-[10px] sm:text-xs text-github-text dark:text-gray-700">{item.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="font-semibold text-white dark:text-gray-900 mb-2 text-base sm:text-lg">Skills & Interests</div>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-github-text dark:text-gray-700 space-y-1">
            <li><b>Tools & Platforms:</b> Git, GitHub, GitLab, VS Code, Unity</li>
            <li><b>Languages:</b> Native Filipino, Fluent English, Conversational Mandarin (HSK 4/HSKK)</li>
            <li><b>Interests:</b> Hackathons, AI/ML, UI/UX, Student Leadership, Tech for Good</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
} 