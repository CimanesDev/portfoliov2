import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';
import { GripVertical } from 'lucide-react';

export default function DraggableCard({ id, children, className = '' }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.8 : 1,
    scale: isDragging ? 1.05 : 1,
    rotate: isDragging ? 2 : 0,
    cursor: isDragging ? 'grabbing' : 'default',
    zIndex: isDragging ? 1 : 0,
    boxShadow: isDragging 
      ? '0 20px 40px rgba(0,0,0,0.2), 0 0 0 2px rgba(88,166,255,0.3)' 
      : '0 4px 6px rgba(0,0,0,0.1)',
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      whileHover={{ y: -4, boxShadow: '0 8px 32px 0 rgba(88,166,255,0.10)' }}
      whileTap={{ scale: 0.98, cursor: 'grabbing' }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20,
        scale: { type: 'spring', stiffness: 400, damping: 17 },
        rotate: { type: 'spring', stiffness: 200, damping: 20 }
      }}
      className={`relative rounded-lg border border-github-border dark:border-gray-200 bg-github-bg dark:bg-gray-50 p-4 sm:p-6 ${className}`}
    >
      {/* Drag handle at top right */}
      <div
        {...attributes}
        {...listeners}
        className="absolute top-2 right-2 p-1 cursor-grab text-gray-400 hover:text-[#58a6ff] active:cursor-grabbing"
        title="Drag to reorder"
        tabIndex={0}
        aria-label="Drag handle"
        style={{ zIndex: 10 }}
      >
        <GripVertical size={20} className="text-gray-400" />
      </div>
      {children}
    </motion.div>
  );
} 