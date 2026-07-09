'use client';

import Image from 'next/image';
import {
  Building2,
  Factory,
  HeartPulse,
  Hotel,
  GraduationCap,
  Landmark,
  Home,
  Server,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { Industry } from '@/data/industries';

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Factory,
  HeartPulse,
  Hotel,
  GraduationCap,
  Landmark,
  Home,
  Server,
};

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

export function IndustryCard({ industry, index }: IndustryCardProps) {
  const { title, icon, imageUrl, shortDescription } = industry;
  const IconComponent = IconMap[icon] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="group border-border/50 hover:border-accent/40 focus-within:ring-accent relative flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 focus-within:ring-2 hover:shadow-lg dark:border-white/5 dark:bg-[#0B1F3A]"
    >
      {/* Image container with hover zoom */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        {/* Floating icon badge */}
        <span className="absolute bottom-3 left-3 z-10 flex size-[52px] items-center justify-center rounded-full border border-white/15 bg-[#050e1a]/85 text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#D4A84F] group-hover:text-[#0B1628] dark:bg-white/8">
          <IconComponent className="size-6 transition-colors duration-300" />
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col space-y-3 p-5">
        <h3 className="font-heading group-hover:text-accent text-sm font-bold text-[#0B1F3A] transition-colors duration-300 sm:text-base dark:text-white">
          {title}
        </h3>
        <p className="text-text-secondary line-clamp-2 flex-1 text-xs leading-relaxed dark:text-gray-400">
          {shortDescription}
        </p>
        <div className="group-hover:text-accent inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0B1F3A]/70 uppercase transition-colors duration-300 dark:text-white/70">
          <span>Learn More</span>
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </div>
    </motion.div>
  );
}
