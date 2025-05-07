import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import NavbarTabs from './components/NavbarTabs';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import AchievementsPage from './pages/AchievementsPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [page, setPage] = useState('home');
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  let content;
  if (page === 'about') content = <AboutPage />;
  else if (page === 'projects') content = <ProjectsPage />;
  else if (page === 'achievements') content = <AchievementsPage />;
  else if (page === 'education') content = <EducationPage />;
  else if (page === 'contact') content = <ContactPage />;
  else content = <MainContent active={page} setActive={setPage} />;

  return (
    <div className="min-h-screen bg-github-bg dark:bg-white text-github-text dark:text-gray-800">
      <Navbar setActive={setPage} isDark={isDark} toggleTheme={toggleTheme} />
      <div className="flex flex-col md:flex-row justify-center pt-20 pb-10 px-2 sm:px-0 gap-2 md:gap-8 w-full max-w-6xl mx-auto">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center w-full">
          <NavbarTabs active={page} setActive={setPage} />
          <div className="w-full max-w-3xl">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 