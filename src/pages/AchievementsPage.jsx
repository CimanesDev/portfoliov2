import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import DraggableCard from '../components/DraggableCard';

const initialAchievements = [
  {
    id: '1',
    title: 'UP SoComSci PauTECHan 2024 - Champion',
    date: 'May 2024',
    description: 'Competed against teams from different year levels in a General Tech Trivia and Computer Science Fun Facts competition.'
  },
  {
    id: '2',
    title: 'UPM GDSC Case Proposal Challenge - Champion',
    date: 'May 2024',
    description: 'Proposed "KLIMANILA: Machine Learning-powered Climate Map Tracker for Empowering Urban Adaptation Strategies" in the case competition.'
  },
  {
    id: '3',
    title: 'Ateneo Blue Hacks 2025 - Champion',
    date: 'February 2025',
    description: 'Won first place out of 25 teams at the hackathon by building the entire frontend of a disaster response app that connects victims with responders.'
  },
  {
    id: '4',
    title: 'UP SoComSci Hackathon 2025 - 1st Runner-Up',
    date: 'May 2025',
    description: 'Won 1st runner-up out of 12 teams at a hackathon that focused on creating a solution for our healthcare system using AI.'
  }
];

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState(initialAchievements);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      setAchievements((items) => {
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
        <h2 className="text-xl sm:text-2xl font-bold text-white dark:text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">Achievements</h2>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={achievements.map(achievement => achievement.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-4">
              {achievements.map((ach) => (
                <DraggableCard key={ach.id} id={ach.id}>
                  <div className="font-semibold text-github-text dark:text-gray-900 text-base sm:text-lg mb-1">{ach.title}</div>
                  <div className="text-xs sm:text-sm text-github-text dark:text-gray-700 mb-2">{ach.date}</div>
                  <div className="text-xs sm:text-sm text-github-text dark:text-gray-700">{ach.description}</div>
                </DraggableCard>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </motion.section>
    </div>
  );
} 