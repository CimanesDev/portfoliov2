import React, { useState, useMemo } from 'react';
import { ExternalLink, X, LayoutGrid, List as ListIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import DraggableCard from '../components/DraggableCard';

const initialProjects = [
  {
    id: '1',
    title: 'KaagapAI',
    stack: ['ReactJS', 'TailwindCSS', 'Gemini API', 'Firebase'],
    description: 'Developed a website that helps people log in their symptoms and lets AI analyze, get a diagnosis, and recommend nearby clinics/hospitals.',
    link: 'https://kaagap-ai.netlify.app',
    image: '/projects/kaagapai.png'
  },
  {
    id: '2',
    title: 'Iskola',
    stack: ['ReactJS', 'TailwindCSS', 'Gemini API'],
    description: 'Developed an AI-powered study assistant web app that helps students by summarizing uploaded notes, generating quizzes from the content, and providing a chatbot for concept clarification through Gemini API integration.',
    link: 'https://iskola-ai.netlify.app',
    image: '/projects/iskola.png'
  },
  {
    id: '3',
    title: 'HellWeekCoffee',
    stack: ['Java'],
    description: 'Developed a Restaurant POS system as a school requirement for our final machine problem. It manages transactions, item encoding, customizations, and sales tracking to streamline coffee shop operations.',
    link: null,
  },
  {
    id: '4',
    title: 'SalbaBida',
    stack: ['ReactJS', 'Google Maps API', 'Python Flask'],
    description: 'Built the entire frontend of a real-time disaster response platform connecting victims (Biktima) with responders (Tutulong), delivering an intuitive and responsive user experience that streamlined emergency coordination.',
    link: null,
    image: '/projects/salbabida.png'
  },
  {
    id: '5',
    title: 'Quine-McCluskey Minimizer',
    stack: ['ReactJS'],
    description: 'Developed a web application with an intuitive user interface that minimizes boolean functions using the Quine-McCluskey Method for our final machine problem, allowing users to efficiently simplify complex logical expressions.',
    link: 'https://quinemccluskey-carocimanes.netlify.app',
    image: '/projects/quine.png'
  },
    {
      id: '6',
      title: 'EDC atbp',
      stack: ['ReactJS', 'TailwindCSS'],
      description: 'Developed a complete e-commerce solution with role-based dashboards for administrators and customers, featuring product management, secure transactions, and real-time inventory tracking to replicate a seamless online shopping experience.',
      link: 'https://edc-atbp.netlify.app',
      image: '/projects/edc.png'
    },
    {
      id: '7',
      title: 'BantAI',
      stack: ['ReactJS', 'TailwindCSS', 'Gemini API', 'Google Maps API', 'Firebase'],
      description: 'Built a website that enables users to analyze their traffic tickets for potential errors using AI, submit appeals directly to administrators, and look up violations by license plate number. ',
      link: 'https://bantai.netlify.app',
      image: '/projects/bantai.png'
    },
    {
      id: '8',
      title: 'Tetris Effect',
      stack: ['JavaFX'],
      description: 'Developed a Tetris clone with dynamic music, background effects, and multithreading for smoother gameplay. It has a highscore system and a leaderboard, as well as a local multiplayer game mode.',
      link: null,
    }
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedStack, setSelectedStack] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Get unique stacks from all projects
  const uniqueStacks = useMemo(() => {
    const stacks = new Set();
    projects.forEach(project => {
      project.stack.forEach(tech => stacks.add(tech));
    });
    return Array.from(stacks).sort();
  }, [projects]);

  // Filter projects based on selected stack
  const filteredProjects = useMemo(() => {
    if (!selectedStack) return projects;
    return projects.filter(project => project.stack.includes(selectedStack));
  }, [projects, selectedStack]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      setProjects((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        
        const newItems = [...items];
        const [movedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, movedItem);
        
        return newItems;
      });
    }
  };

  return (
    <div className="flex justify-center py-8 px-2 sm:px-0">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-[#161b22] dark:bg-white border border-github-border dark:border-gray-200 rounded-xl p-4 sm:p-8 w-full max-w-5xl mx-auto shadow-lg"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-white dark:text-gray-900">Projects</h2>
          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-l-full border border-github-border dark:border-gray-300 transition-colors flex items-center gap-1 text-sm font-medium
                ${viewMode === 'list'
                  ? 'bg-[#58a6ff] dark:bg-blue-500 text-white'
                  : 'bg-[#21262d] dark:bg-gray-200 text-[#58a6ff] dark:text-blue-600 hover:bg-[#30363d] dark:hover:bg-gray-300'}
              `}
              aria-label="List view"
            >
              <ListIcon size={18} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-r-full border-t border-b border-r border-github-border dark:border-gray-300 transition-colors flex items-center gap-1 text-sm font-medium -ml-px
                ${viewMode === 'grid'
                  ? 'bg-[#58a6ff] dark:bg-blue-500 text-white'
                  : 'bg-[#21262d] dark:bg-gray-200 text-[#58a6ff] dark:text-blue-600 hover:bg-[#30363d] dark:hover:bg-gray-300'}
              `}
              aria-label="Grid view"
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </div>
        {/* Stack Filter */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          <button
            onClick={() => setSelectedStack(null)}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
              selectedStack === null
                ? 'bg-[#58a6ff] dark:bg-blue-500 text-white'
                : 'bg-[#21262d] dark:bg-gray-200 text-[#58a6ff] dark:text-blue-600 hover:bg-[#30363d] dark:hover:bg-gray-300'
            }`}
          >
            All
          </button>
          {uniqueStacks.map((stack) => (
            <button
              key={stack}
              onClick={() => setSelectedStack(stack)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedStack === stack
                  ? 'bg-[#58a6ff] dark:bg-blue-500 text-white'
                  : 'bg-[#21262d] dark:bg-gray-200 text-[#58a6ff] dark:text-blue-600 hover:bg-[#30363d] dark:hover:bg-gray-300'
              }`}
            >
              {stack}
            </button>
          ))}
        </div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={filteredProjects.map(project => project.id)}
            strategy={verticalListSortingStrategy}
          >
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects.map((proj) => (
                  <DraggableCard key={proj.id} id={proj.id}>
                    <div 
                      className="flex flex-col h-full cursor-pointer group rounded-2xl overflow-hidden shadow-lg border border-github-border dark:border-gray-200 bg-[#1a1f27] dark:bg-gray-50 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                      onClick={() => setSelectedProject(proj)}
                    >
                      <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <img 
                          src={proj.image} 
                          alt={proj.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src = '/projects/placeholder.svg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                        {proj.link && (
                          <motion.a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 4, scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-[#58a6ff] transition-colors opacity-80 group-hover:opacity-100"
                            title="View Project"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={18} />
                          </motion.a>
                        )}
                      </div>
                      <div className="flex-1 p-6 bg-transparent">
                        <h3 className="font-semibold text-white dark:text-gray-900 text-xl mb-2 line-clamp-1">
                          {proj.title}
                        </h3>
                        <p className="text-sm text-github-text dark:text-gray-700 mb-4 line-clamp-2 min-h-[2.5em]">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {proj.stack.map((tech, j) => (
                            <span key={j} className="px-2 py-1 rounded-full bg-[#23272e] dark:bg-blue-100 border border-[#58a6ff] dark:border-blue-400 text-[11px] text-[#58a6ff] dark:text-blue-600 font-medium shadow-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DraggableCard>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {filteredProjects.map((proj) => (
                  <DraggableCard key={proj.id} id={proj.id}>
                    <div className="flex items-center gap-2 p-2 bg-[#181c23] dark:bg-gray-100 rounded-lg border border-github-border dark:border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <h3 className="font-semibold text-white dark:text-gray-900 text-sm truncate">{proj.title}</h3>
                          {proj.link && (
                            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] dark:text-blue-600 hover:underline" onClick={e => e.stopPropagation()}><ExternalLink size={14} /></a>
                          )}
                        </div>
                        <p className="text-[11px] text-github-text dark:text-gray-700 truncate font-normal">{proj.description}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {proj.stack.map((tech, j) => (
                            <span key={j} className="px-2 py-0.5 rounded-full bg-[#23272e] dark:bg-blue-100 border border-[#58a6ff] dark:border-blue-400 text-[10px] text-[#58a6ff] dark:text-blue-600 font-medium">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DraggableCard>
                ))}
              </div>
            )}
          </SortableContext>
        </DndContext>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-[#21262d] dark:bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full aspect-video object-cover rounded-t-xl"
                    onError={(e) => {
                      e.target.src = '/projects/placeholder.svg';
                    }}
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-semibold text-white dark:text-gray-900">{selectedProject.title}</h3>
                    {selectedProject.link && (
                      <motion.a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-full bg-[#30363d] dark:bg-gray-200 text-white dark:text-gray-900 hover:bg-[#40464d] dark:hover:bg-gray-300 transition-colors"
                        title="View Project"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.stack.map((tech, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-full border border-[#58a6ff] dark:border-blue-400 text-sm text-[#58a6ff] dark:text-blue-600 bg-transparent font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-base text-white dark:text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </div>
  );
} 