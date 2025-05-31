import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import DraggableCard from './DraggableCard';
import { ExternalLink } from 'lucide-react';

export default function MainContent({ setActive }) {
  const initialCards = [
    {
      id: 'about',
      title: 'About Me',
      headerAction: (
        <button
          className="text-xs text-[#238636] dark:text-green-600 hover:underline bg-transparent border-none ml-auto"
          onClick={() => setActive('about')}
        >
          View Full Readme
        </button>
      ),
      content: (
        <div className="text-sm text-github-text dark:text-gray-700">
          <p className="mb-4">I'm a second year Computer Science student at the University of the Philippines Manila, specializing in Statistical Computing. I love learning new technologies and working on projects that help others.</p>
          <div className="space-y-2">
            <h3 className="font-semibold text-github-text dark:text-gray-900">Skills:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Frontend Development (React, JavaScript, TypeScript, TailwindCSS)</li>
              <li>Backend Development (Python, Firebase, Supabase, PostgreSQL)</li>
              <li>Tools (Git, GitHub, Firebase, Netlify, Cursor)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'recent-projects',
      title: 'Recent Projects',
      headerAction: (
        <button
          className="text-xs text-[#238636] dark:text-green-600 hover:underline bg-transparent border-none ml-auto"
          onClick={() => setActive('projects')}
        >
          View All Projects
        </button>
      ),
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* KaagapAI Card */}
          <div className="border border-github-border dark:border-gray-200 rounded-lg p-4 sm:p-6 bg-github-bg dark:bg-gray-50 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-github-text dark:text-gray-900 text-base sm:text-lg">KaagapAI</span>
              <motion.a
                href="https://kaagap-ai.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-inherit hover:underline"
                title="View Project"
              >
                <ExternalLink size={16} />
              </motion.a>
            </div>
            <div className="flex flex-wrap gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-full border border-[#58a6ff] dark:border-blue-400 text-xs text-[#58a6ff] dark:text-blue-600 bg-transparent font-medium">ReactJS</span>
            </div>
            <div className="text-xs sm:text-sm text-github-text dark:text-gray-700 mb-1">AI-powered healthcare platform that helps users get medical advice and find nearby clinics.</div>
          </div>
          {/* Iskola Card */}
          <div className="border border-github-border dark:border-gray-200 rounded-lg p-4 sm:p-6 bg-github-bg dark:bg-gray-50 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-github-text dark:text-gray-900 text-base sm:text-lg">Iskola</span>
              <motion.a
                href="https://iskola-ai.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-inherit hover:underline"
                title="View Project"
              >
                <ExternalLink size={16} />
              </motion.a>
            </div>
            <div className="flex flex-wrap gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-full border border-[#58a6ff] dark:border-blue-400 text-xs text-[#58a6ff] dark:text-blue-600 bg-transparent font-medium">ReactJS</span>
            </div>
            <div className="text-xs sm:text-sm text-github-text dark:text-gray-700 mb-1">AI-powered study assistant that summarizes notes, generates quizzes, and provides a chatbot for concept clarification.</div>
          </div>
        </div>
      )
    },
    {
      id: 'education-snapshot',
      title: 'Education Snapshot',
      headerAction: (
        <button
          className="text-xs text-[#238636] dark:text-green-600 hover:underline bg-transparent border-none ml-auto"
          onClick={() => setActive('education')}
        >
          View Education
        </button>
      ),
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-github-text dark:text-gray-900">University of the Philippines Manila</h3>
            <p className="text-sm text-github-text dark:text-gray-700">BS Computer Science (2023–2027)</p>
            <p className="text-xs text-github-text dark:text-gray-700">College Scholar/Dean's List</p>
          </div>
        </div>
      )
    }
  ];

  const [cards, setCards] = useState(initialCards);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      setCards((items) => {
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
    <div className="flex-1 p-4 sm:p-8">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={cards.map(card => card.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="max-w-2xl mx-auto space-y-6">
            {cards.map((card) => (
              <DraggableCard key={card.id} id={card.id}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white dark:text-gray-900">{card.title}</h2>
                  {card.headerAction}
                </div>
                {card.content}
              </DraggableCard>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
} 