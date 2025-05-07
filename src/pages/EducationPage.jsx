import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import DraggableCard from '../components/DraggableCard';

const initialEducation = [
  {
    id: '1',
    school: 'University of the Philippines Manila',
    degree: 'BS Computer Science (2023–2027)',
    details: [
      "College Scholar/Dean's List (1st Sem AY 2023-2024, 1st Sem AY 2024-2025)",
      'Google Developer Groups on Campus UP Manila – Member',
      'UP Society of Computer Scientists – Member',
      'Level Up – Project Head',
    ],
  },
  {
    id: '2',
    school: 'Chiang Kai Shek College',
    degree: 'High School Diploma (2008–2023)',
    details: [
      'With High Honors',
      'Track and Field Varsity Player',
      'Chess Team Varsity Player',
    ],
  },
];

export default function EducationPage() {
  const [education, setEducation] = useState(initialEducation);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      setEducation((items) => {
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
        <h2 className="text-xl sm:text-2xl font-bold text-white dark:text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">Education</h2>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={education.map(edu => edu.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-4">
              {education.map((edu) => (
                <DraggableCard key={edu.id} id={edu.id}>
                  <div className="font-semibold text-github-text dark:text-gray-900 text-base sm:text-lg mb-1">{edu.school}</div>
                  <div className="text-xs sm:text-sm text-github-text dark:text-gray-700 mb-2">{edu.degree}</div>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-github-text dark:text-gray-700 space-y-1">
                    {edu.details.map((d, j) => <li key={j}>{d}</li>)}
                  </ul>
                </DraggableCard>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </motion.section>
    </div>
  );
} 