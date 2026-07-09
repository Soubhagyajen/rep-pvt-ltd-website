'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bolt, Wind, Droplets, Flame, Network, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Service } from '@/types';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onSelect: () => void;
}

export function ServiceCard({ service, isActive, onSelect }: ServiceCardProps) {
  const { title, icon, imageUrl, shortDescription } = service;

  const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Zap: Bolt,
    Wind: Wind,
    Droplet: Droplets,
    Flame: Flame,
    Cpu: Network,
    Activity: ShieldCheck,
  };
  const IconComponent = IconMap[icon] || Bolt;

  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={cn(
        'group hover:border-accent focus-visible:ring-accent relative flex min-h-[360px] w-full flex-col overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,155,60,0.15)] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:outline-none dark:bg-[#0B1F3A]',
        isActive
          ? 'border-accent dark:border-accent shadow-md'
          : 'border-border/50 dark:border-white/5',
      )}
    >
      {/* 1. Image Container with zoom hover effect */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-focus-visible:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
      </div>

      {/* 2. Content block */}
      <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
        <div className="space-y-3">
          {/* Header block with Icon & Title */}
          <div className="flex items-center gap-3">
            <span className="flex size-[52px] shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#050e1a] text-white transition-all duration-300 group-hover:bg-[#D4A84F] group-hover:text-[#0B1628] dark:bg-white/8">
              <IconComponent className="size-6 transition-colors duration-300" />
            </span>
            <h3 className="font-heading group-hover:text-accent text-sm font-bold text-[#0B1F3A] transition-colors duration-300 sm:text-base dark:text-white">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-text-secondary line-clamp-3 text-xs leading-relaxed sm:text-sm dark:text-gray-400">
            {shortDescription}
          </p>
        </div>

        {/* Learn More link with animated arrow */}
        <Link
          href={`/services#${service.id}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={cn(
            'inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors duration-300',
            isActive
              ? 'text-accent'
              : 'group-hover:text-accent text-[#0B1F3A]/80 dark:text-white/80',
          )}
        >
          <span>Learn More</span>
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </motion.button>
  );
}
