'use client';

import { Layers, Award, Users, Shield, Clock, Cpu } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import type { WhyChooseItem } from '@/data/whyChoose';

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Award,
  Users,
  Shield,
  Clock,
  Cpu,
};

interface WhyChooseCardProps {
  item: WhyChooseItem;
  index: number;
}

export function WhyChooseCard({ item, index }: WhyChooseCardProps) {
  const { title, description, icon } = item;
  const IconComponent = IconMap[icon] || Layers;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] },
    },
    hover: {
      y: -6,
      transition: { duration: 0.25, ease: 'easeOut' },
    },
  };

  const iconVariants: Variants = {
    hover: {
      scale: 1.1,
      rotate: [0, -8, 8, 0],
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover="hover"
      className="group border-border/50 hover:border-accent/40 relative flex w-full flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8 dark:border-white/5 dark:bg-[#0B1F3A]"
    >
      {/* Premium subtle background glow */}
      <div className="from-accent/5 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Floating top golden border line on hover */}
      <div className="from-accent absolute top-0 right-0 left-0 h-1 bg-gradient-to-r to-[#E5C07B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon block with spring anim */}
      <div className="mb-5 sm:mb-6">
        <motion.span
          variants={iconVariants}
          className="bg-accent/10 text-accent group-hover:bg-accent flex size-12 items-center justify-center rounded-xl transition-colors duration-300 group-hover:text-white"
        >
          <IconComponent className="size-6 transition-transform duration-300" />
        </motion.span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between space-y-3">
        <div>
          <h3 className="font-heading group-hover:text-accent text-base leading-snug font-bold text-[#0B1F3A] transition-colors duration-300 sm:text-lg dark:text-white">
            {title}
          </h3>
          <p className="text-text-secondary mt-2.5 text-xs leading-relaxed sm:text-sm dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
