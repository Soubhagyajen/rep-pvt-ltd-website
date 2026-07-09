'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryItem {
  src: string;
  title: string;
  category: string;
  client: string;
  description: string;
}

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [activeImageIndex, setActiveImageIndex] = React.useState<number | null>(null);

  const GALLERY_ITEMS: GalleryItem[] = React.useMemo(
    () => [
      {
        src: '/assets/images/tmc_img1.webp',
        title: 'Main Reception & Patient Welcome Area',
        category: 'Healthcare',
        client: 'The Medical Centre (TMC)',
        description:
          'Concealed central HVAC ventilation channels, linear diffuser grids, and integrated fire detection/sprinkler integration.',
      },
      {
        src: '/assets/images/tmc_img2.webp',
        title: 'Consultation Room',
        category: 'Healthcare',
        client: 'The Medical Centre (TMC)',
        description:
          'Specialized medical gas distribution networks, localized climate thermostatic zones, and anti-glare high-CRI task illumination.',
      },
      {
        src: '/assets/images/tmc_img3.webp',
        title: 'Patient Waiting Area',
        category: 'Healthcare',
        client: 'The Medical Centre (TMC)',
        description:
          'High-occupancy mechanical fresh air ventilation feeds, multi-zone thermostatic control sensors, and safety smoke containment systems.',
      },
      {
        src: '/assets/images/tmc_img4.webp',
        title: 'Hospital Entrance Lobby',
        category: 'Healthcare',
        client: 'The Medical Centre (TMC)',
        description:
          'Double-height commercial HVAC air curtain ventilation, high-lumen structural LED grids, and primary fire suppression system lines.',
      },
    ],
    [],
  );

  // Filtered list of items
  const filteredItems = React.useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(
      (item) => item.category.toLowerCase() === selectedCategory.toLowerCase(),
    );
  }, [selectedCategory, GALLERY_ITEMS]);

  const categories = ['All', 'Residential', 'Commercial', 'Healthcare', 'Industrial'];

  const handleNext = React.useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prevIndex) =>
      prevIndex === null ? null : (prevIndex + 1) % filteredItems.length,
    );
  }, [activeImageIndex, filteredItems.length]);

  const handlePrev = React.useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prevIndex) =>
      prevIndex === null ? null : (prevIndex - 1 + filteredItems.length) % filteredItems.length,
    );
  }, [activeImageIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handleNext, handlePrev]);

  return (
    <div className="space-y-12">
      {/* 1. Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setActiveImageIndex(null);
            }}
            className={cn(
              'rounded-full border px-6 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 focus-visible:outline-none',
              selectedCategory === cat
                ? 'bg-accent border-accent text-white shadow-lg'
                : 'hover:border-accent/40 border-white/10 bg-white/[0.02] text-gray-400 hover:text-white',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 2. Photo Grid */}
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              onClick={() => setActiveImageIndex(idx)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-slate-950/40 shadow-md select-none"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a]/90 via-[#050e1a]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Maximize Icon */}
              <div className="hover:bg-accent absolute top-4 right-4 rounded-xl border border-white/10 bg-[#050e1a]/60 p-2.5 text-white opacity-0 transition-colors transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="size-4" />
              </div>

              {/* Text Info */}
              <div className="absolute inset-x-0 bottom-0 translate-y-4 space-y-1 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-accent text-[9px] font-bold tracking-widest uppercase">
                  {item.category}
                </span>
                <h4 className="font-heading text-sm leading-tight font-bold text-white">
                  {item.title}
                </h4>
                <p className="line-clamp-1 text-[10px] text-gray-400">Client: {item.client}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 3. Dynamic Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
          >
            {/* Top Toolbar */}
            <div className="relative z-10 flex w-full items-center justify-between">
              <div className="flex flex-col text-left">
                <span className="text-accent text-[10px] font-bold tracking-widest uppercase">
                  {filteredItems[activeImageIndex].category}
                </span>
                <span className="text-xs text-gray-400">
                  Image {activeImageIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <button
                onClick={() => setActiveImageIndex(null)}
                className="rounded-full p-3 text-white transition-colors duration-200 hover:bg-white/10 focus:outline-none"
                aria-label="Close lightbox"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Main Stage */}
            <div className="relative mx-auto my-4 flex w-full max-w-5xl flex-1 items-center justify-center">
              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-0 z-10 rounded-full p-3 text-white transition-colors duration-200 hover:bg-white/10 focus:outline-none sm:-left-16"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-8" />
              </button>

              {/* Current Image Container */}
              <div className="relative aspect-[4/3] max-h-[65vh] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 select-none sm:aspect-[16/10]">
                <Image
                  src={filteredItems[activeImageIndex].src}
                  alt={filteredItems[activeImageIndex].title}
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-0 z-10 rounded-full p-3 text-white transition-colors duration-200 hover:bg-white/10 focus:outline-none sm:-right-16"
                aria-label="Next image"
              >
                <ChevronRight className="size-8" />
              </button>
            </div>

            {/* Bottom Details Footer */}
            <div className="relative z-10 mx-auto w-full max-w-4xl space-y-1 pb-4 text-center">
              <h3 className="font-heading text-base font-bold text-white sm:text-lg">
                {filteredItems[activeImageIndex].title}
              </h3>
              <p className="text-xs text-gray-400">
                Client: {filteredItems[activeImageIndex].client}
              </p>
              <p className="mx-auto mt-1.5 max-w-2xl text-xs text-gray-300 italic">
                {filteredItems[activeImageIndex].description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
