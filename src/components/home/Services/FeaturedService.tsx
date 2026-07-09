'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { Service } from '@/types';

interface FeaturedServiceProps {
  service: Service;
}

export function FeaturedService({ service }: FeaturedServiceProps) {
  const { title, description, features, metrics, imageUrl } = service;

  return (
    <div className="border-border/40 relative mt-12 w-full overflow-hidden rounded-3xl border bg-white p-6 shadow-sm sm:mt-16 sm:p-8 lg:p-10 dark:border-white/5 dark:bg-[#0B1F3A]/40">
      {/* Absolute glassmorphic gradient highlights */}
      <div className="bg-accent/10 pointer-events-none absolute top-0 right-0 -z-10 size-80 rounded-full blur-3xl" />

      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
        >
          {/* Detailed Content - Columns 1 to 7 */}
          <div className="space-y-6 lg:col-span-7">
            <div className="space-y-3">
              <span className="text-accent text-xs font-bold tracking-widest uppercase">
                Featured discipline
              </span>
              <h3 className="font-heading text-2xl font-extrabold text-[#0B1F3A] sm:text-3xl dark:text-white">
                {title}
              </h3>
              <p className="text-text-secondary font-sans text-sm leading-relaxed sm:text-base dark:text-gray-300">
                {description}
              </p>
            </div>

            {/* Checklist Highlights */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="bg-accent/10 text-accent mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                    <Check className="size-3" />
                  </span>
                  <span className="text-xs leading-normal font-medium text-[#0B1F3A] sm:text-sm dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Metrics Showcase */}
            {metrics && metrics.length > 0 && (
              <div className="border-border/40 grid grid-cols-2 gap-4 border-t pt-6 dark:border-white/5">
                {metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-heading text-accent text-lg font-extrabold sm:text-xl">
                      {metric.value}
                    </div>
                    <div className="text-2xs text-text-secondary font-bold tracking-wider uppercase sm:text-xs dark:text-gray-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Large Image Showcase - Columns 8 to 12 */}
          <div className="border-border/20 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-slate-100 shadow-md lg:col-span-5 dark:border-white/5 dark:bg-slate-900">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={`${title} Detailed Image`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a]/40 to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
