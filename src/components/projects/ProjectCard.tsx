'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { MapPin, Building, Calendar, ArrowRight } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { slug, title, client, location, category, status, completionYear, coverImage } = project;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.06, ease: [0.25, 1, 0.5, 1] as const },
    },
    hover: {
      y: -4,
      borderColor: '#c89b3c',
      boxShadow:
        '0 12px 30px -10px rgba(200, 155, 60, 0.15), 0 4px 10px -5px rgba(11, 31, 58, 0.08)',
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
      className="group border-border/10 relative flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-[#0B1F3A] shadow-sm transition-all duration-300"
    >
      {/* 1. Image container with zoom hover effect */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-900 select-none">
        {coverImage && (
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        )}
        {/* Soft shadow gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a]/90 via-[#050e1a]/20 to-transparent transition-opacity duration-300 group-hover:opacity-40" />
        <div className="from-accent/20 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Floating Category Badge */}
        <span className="font-heading bg-accent/90 absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-sm">
          {category}
        </span>

        {/* Status Badge */}
        <span
          className={`absolute top-4 right-4 rounded-md border px-2.5 py-1 text-[9px] font-bold tracking-wider text-white uppercase shadow-sm ${
            status === 'Completed'
              ? 'bg-success/80 border-success/30'
              : 'bg-warning/80 border-warning/30'
          }`}
        >
          {status}
        </span>
      </div>

      {/* 2. Content */}
      <div className="flex flex-1 flex-col justify-between space-y-4 p-5 sm:p-6">
        <div className="space-y-3">
          {/* Client & Date */}
          <div className="flex items-center justify-between text-[10px] font-bold tracking-wider text-gray-400 uppercase">
            <span className="flex items-center gap-1.5">
              <Building className="text-accent size-3" />
              <span className="line-clamp-1">{client}</span>
            </span>
            <span className="flex shrink-0 items-center gap-1.5">
              <Calendar className="text-accent size-3" />
              <span>{status === 'Completed' ? completionYear : 'Ongoing'}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading group-hover:text-accent line-clamp-1 text-sm leading-snug font-bold text-white transition-colors duration-300 sm:text-base">
            {title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-gray-300">
            <MapPin className="text-accent size-3.5 shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white/5" />

        {/* CTA: View Project */}
        <Link
          href={`/projects/${slug || ''}`}
          className="group-hover:text-accent inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white/80 uppercase transition-colors duration-300 focus-visible:outline-none"
        >
          <span>View Project</span>
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </motion.div>
  );
}
