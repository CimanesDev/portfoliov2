import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', key: 'about' },
  { label: 'Projects', key: 'projects' },
  { label: 'Achievements', key: 'achievements' },
  { label: 'Education', key: 'education' },
  { label: 'Contact', key: 'contact' },
];

export default function Navbar({ setActive, isDark, toggleTheme }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const searchOptions = ['About', 'Projects', 'Achievements', 'Education', 'Contact'];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const match = searchOptions.find(option => 
      option.toLowerCase().includes(query.toLowerCase())
    );
    if (match) {
      setActive(match.toLowerCase());
    }
  };

  const handleNavClick = (key) => {
    setActive(key);
    setDrawerOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#161b22] dark:bg-white border-b border-github-border dark:border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex flex-row justify-between items-center h-14 sm:h-16 gap-2 py-2 sm:py-0">
          {/* Left: CimanesDev */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={() => setActive('home')}
            className="text-white dark:text-gray-900 font-semibold text-lg sm:text-xl bg-transparent border-none outline-none hover:text-white dark:hover:text-gray-900 hover:no-underline focus:no-underline active:no-underline cursor-pointer"
            style={{ padding: 0 }}
          >
            CimanesDev
          </motion.button>

          {/* Desktop: Search + Theme (no navLinks) */}
          <div className="hidden sm:flex items-center gap-2">
            <input
              type="text"
              placeholder="Search pages..."
              className="bg-[#0d1117] dark:bg-gray-100 text-white dark:text-gray-900 border border-github-border dark:border-gray-200 rounded-lg px-2 sm:px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#58a6ff] dark:focus:ring-blue-500 w-full max-w-[180px] sm:max-w-xs"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-github-text dark:text-gray-700 hover:bg-[#21262d] dark:hover:bg-gray-200 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile: Theme + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-github-text dark:text-gray-700 hover:bg-[#21262d] dark:hover:bg-gray-200 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="p-2 rounded-lg text-github-text dark:text-gray-700 hover:bg-[#21262d] dark:hover:bg-gray-200 transition-colors"
            >
              {drawerOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-[#161b22] dark:bg-white border-l border-github-border dark:border-gray-200 z-50 flex flex-col p-6 gap-4 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-white dark:text-gray-900">Menu</span>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-lg text-white dark:text-gray-900 bg-[#21262d] dark:bg-gray-200 hover:bg-[#30363d] dark:hover:bg-gray-300 focus:outline-none"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>
            {navLinks.map(link => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.key)}
                className="w-full text-left px-3 py-2 text-base font-medium text-white dark:text-gray-900 hover:bg-[#21262d] dark:hover:bg-gray-200 rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 