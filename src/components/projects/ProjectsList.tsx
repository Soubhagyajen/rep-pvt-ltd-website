'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { LayoutGrid, Filter } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Commercial',
  'Residential',
  'Industrial',
  'Healthcare',
  'Hospitality',
  'Educational',
] as const;

export function ProjectsList() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter projects by category
  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* 1. Category Filter Bar */}
      <div className="mb-10 flex flex-col items-start justify-between gap-6 border-b border-white/5 pb-6 md:flex-row md:items-center">
        {/* Category triggers */}
        <div className="flex w-full scrollbar-none items-center gap-2 overflow-x-auto pb-3 select-none md:w-auto md:pb-0">
          <span className="text-accent mr-2 flex shrink-0 items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase">
            <Filter className="size-3.5" />
            <span>Filter:</span>
          </span>

          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-heading text-2xs shrink-0 rounded-full border px-4 py-2 font-bold tracking-widest uppercase transition-all duration-300 focus-visible:outline-none ${
                  isActive
                    ? 'bg-accent border-accent text-white shadow-sm'
                    : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/30 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Counter Info */}
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-400 uppercase select-none">
          <LayoutGrid className="text-accent size-3.5" />
          <span>Showing {filteredProjects.length} Projects</span>
        </div>
      </div>

      {/* 2. Projects Grid with Framer Motion stagger layout */}
      <motion.div
        layout
        className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug || project.id || index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 3. Empty State if no projects match */}
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-gray-400">
          <p className="text-sm font-medium">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
