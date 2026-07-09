'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center space-y-4 text-center sm:mb-16">
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="font-heading text-accent text-xs font-bold tracking-widest uppercase"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="font-heading text-3xl leading-[1.15] font-extrabold tracking-tight text-[#0B1F3A] sm:text-4xl dark:text-white"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.16 }}
        className="text-text-secondary font-sans text-sm leading-relaxed sm:text-base dark:text-gray-300"
      >
        {description}
      </motion.p>
    </div>
  );
}
