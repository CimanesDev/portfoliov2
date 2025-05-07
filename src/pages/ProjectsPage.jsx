import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import DraggableCard from '../components/DraggableCard';

const initialProjects = [
  {
    id: '1',
    title: 'KaagapAI',
    stack: ['ReactJS'],
    description: 'Developed a website that helps people log in their symptoms and lets AI analyze, get a diagnosis, and recommend nearby clinics/hospitals.',
    link: 'https://kaagap-ai.netlify.app',
  },
  {
    id: '2',
    title: 'Iskola',
    stack: ['ReactJS'],
    description: 'Developed an AI-powered study assistant web app that helps students by summarizing uploaded notes, generating quizzes from the content, and providing a chatbot for concept clarification through Gemini API integration.',
    link: 'https://iskola-ai.netlify.app',
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
    stack: ['ReactJS'],
    description: 'Built the entire frontend of a real-time disaster response platform connecting victims (Biktima) with responders (Tutulong), delivering an intuitive and responsive user experience that streamlined emergency coordination.',
    link: null,
  },
  {
    id: '5',
    title: 'Quine-McCluskey Minimizer',
    stack: ['ReactJS'],
    description: 'Developed a web application with an intuitive user interface that minimizes boolean functions using the Quine-McCluskey Method for our final machine problem, allowing users to efficiently simplify complex logical expressions.',
    link: 'https://quinemccluskey-carocimanes.netlify.app',
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);

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
        className="bg-[#161b22] dark:bg-white border border-github-border dark:border-gray-200 rounded-xl p-4 sm:p-10 w-full max-w-2xl mx-auto shadow-lg"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-white dark:text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">Projects</h2>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={projects.map(project => project.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-4">
              {projects.map((proj) => (
                <DraggableCard key={proj.id} id={proj.id}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-github-text dark:text-gray-900 text-base sm:text-lg">{proj.title}</span>
                    {proj.link && (
                      <motion.a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-inherit hover:underline"
                        title="View Project"
                      >
                        <FaExternalLinkAlt size={16} />
                      </motion.a>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {proj.stack.map((tech, j) => (
                      <span key={j} className="px-2 py-0.5 rounded-full border border-[#58a6ff] dark:border-blue-400 text-xs text-[#58a6ff] dark:text-blue-600 bg-transparent font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm text-github-text dark:text-gray-700">
                    {proj.description}
                  </div>
                </DraggableCard>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </motion.section>
    </div>
  );
} 