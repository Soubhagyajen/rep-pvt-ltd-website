'use client';

import { motion, Variants } from 'framer-motion';
import type { WorkflowStep } from '@/data/workflow';

interface WorkflowCardProps {
  step: WorkflowStep;
  index: number;
}

export function WorkflowCard({ step, index }: WorkflowCardProps) {
  const { number, title, description } = step;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] as const },
    },
    hover: {
      y: -4,
      borderColor: '#c89b3c',
      boxShadow:
        '0 10px 25px -5px rgba(200, 155, 60, 0.12), 0 8px 16px -6px rgba(11, 31, 58, 0.05)',
      transition: { duration: 0.25, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover="hover"
      className="group border-border/50 relative flex h-full w-full flex-col rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 sm:p-6 dark:border-white/5 dark:bg-[#0B1F3A]"
    >
      {/* Top gold bar on hover */}
      <div className="from-accent absolute top-0 right-0 left-0 h-1 rounded-t-2xl bg-gradient-to-r to-[#E5C07B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Number Badge */}
      <span className="font-heading text-accent/20 group-hover:text-accent/40 text-xl font-black transition-colors duration-300">
        {number}
      </span>

      {/* Content */}
      <div className="mt-3 flex flex-1 flex-col justify-between">
        <div className="space-y-2">
          <h4 className="font-heading group-hover:text-accent text-xs leading-snug font-bold text-[#0B1F3A] transition-colors duration-300 sm:text-sm dark:text-white">
            {title}
          </h4>
          <p className="text-2xs text-text-secondary line-clamp-3 leading-relaxed sm:text-xs dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
