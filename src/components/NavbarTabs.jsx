import React from 'react';
import { User, LayoutGrid, GraduationCap, Trophy, Mail } from 'lucide-react';

const tabs = [
  { label: 'About', key: 'about', icon: <User size={16} /> },
  { label: 'Projects', key: 'projects', icon: <LayoutGrid size={16} /> },
  { label: 'Achievements', key: 'achievements', icon: <Trophy size={16} /> },
  { label: 'Education', key: 'education', icon: <GraduationCap size={16} /> },
  { label: 'Contact', key: 'contact', icon: <Mail size={16} /> },
];

export default function NavbarTabs({ active, setActive }) {
  return (
    <div className="hidden md:flex justify-center w-full mt-3 mb-1">
      <div className="flex border border-github-border dark:border-gray-200 rounded-2xl px-2 py-1 w-full max-w-2xl bg-[#161b22] dark:bg-gray-100">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`flex items-center gap-2 flex-1 justify-center py-2 rounded-xl text-xs font-medium transition-colors
              ${active === tab.key 
                ? 'bg-[#21262d] dark:bg-gray-200 text-white dark:text-gray-900 border-b-2 border-white dark:border-gray-900' 
                : 'text-github-text dark:text-gray-700 hover:bg-[#21262d] dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900'}`}
            style={{ minWidth: 0, background: 'transparent' }}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
} 