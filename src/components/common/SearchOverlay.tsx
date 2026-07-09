'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  X,
  Zap,
  Cpu,
  Droplet,
  Flame,
  Wind,
  Activity,
  Building2,
  Factory,
  HeartPulse,
  Hotel,
  GraduationCap,
  Home,
  Server,
  ChevronRight,
  FileText,
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';
import { PROJECTS_DATA } from '@/data/projects';
import { INDUSTRIES_DATA } from '@/data/industries';

// Lucide icon mapping
const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Wind,
  Droplet,
  Flame,
  Cpu,
  Activity,
  Building2,
  Factory,
  HeartPulse,
  Hotel,
  GraduationCap,
  Home,
  Server,
};

interface SearchOverlayProps {
  onClose: () => void;
}

export function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [query, setQuery] = React.useState('');
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Focus input on mount
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle ESC key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Handle click outside container
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Filter logic
  const filteredResults = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { services: [], projects: [], industries: [] };

    const services = SERVICES_DATA.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.shortDescription.toLowerCase().includes(q),
    );

    const projects = PROJECTS_DATA.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.overview && p.overview.toLowerCase().includes(q)) ||
        p.client.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    );

    const industries = INDUSTRIES_DATA.filter(
      (i) => i.title.toLowerCase().includes(q) || i.shortDescription.toLowerCase().includes(q),
    );

    return { services, projects, industries };
  }, [query]);

  const hasResults =
    filteredResults.services.length > 0 ||
    filteredResults.projects.length > 0 ||
    filteredResults.industries.length > 0;

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        onClick={handleBackdropClick}
        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#050e1a]/95 px-4 pt-16 backdrop-blur-md sm:pt-24"
      >
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
          className="mb-16 w-full max-w-2xl space-y-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl sm:p-8"
        >
          {/* Search Bar Input */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, services, industries..."
                className="focus:border-accent w-full rounded-2xl border border-white/10 bg-white/[0.02] p-4 pl-12 text-sm text-white placeholder-gray-500 transition-colors focus:outline-none sm:text-base"
              />
            </div>
            <button
              onClick={onClose}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 text-gray-400 transition-colors hover:bg-white/[0.06] hover:text-white"
              aria-label="Close search"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] scrollbar-thin scrollbar-thumb-white/10 space-y-6 overflow-y-auto pr-1 text-left">
            {!query ? (
              <div className="py-8 text-center text-xs text-gray-500 sm:text-sm">
                Start typing to search projects, services, and industries...
              </div>
            ) : !hasResults ? (
              <div className="py-8 text-center text-xs text-gray-400 sm:text-sm">
                No results found for &ldquo;
                <span className="font-semibold text-white">{query}</span>&rdquo;
              </div>
            ) : (
              <>
                {/* Services Results */}
                {filteredResults.services.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-accent text-[10px] font-bold tracking-widest uppercase">
                      Services ({filteredResults.services.length})
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {filteredResults.services.map((service) => {
                        const IconComponent = IconMap[service.icon] || Zap;
                        return (
                          <Link
                            key={service.id}
                            href={`/services#${service.id}`}
                            onClick={onClose}
                            className="hover:border-accent/30 group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.01] p-3 transition-all duration-200 hover:bg-white/[0.04]"
                          >
                            <div className="bg-accent/15 text-accent group-hover:bg-accent flex size-9 items-center justify-center rounded-lg transition-all group-hover:text-white">
                              <IconComponent className="size-4.5" />
                            </div>
                            <div className="flex-1 text-left">
                              <div className="text-xs font-semibold text-white sm:text-sm">
                                {service.title}
                              </div>
                              <div className="line-clamp-1 text-[10px] text-gray-400 sm:text-xs">
                                {service.shortDescription}
                              </div>
                            </div>
                            <ChevronRight className="size-4 text-gray-500 transition-colors group-hover:text-white" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Projects Results */}
                {filteredResults.projects.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-accent text-[10px] font-bold tracking-widest uppercase">
                      Projects ({filteredResults.projects.length})
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {filteredResults.projects.map((project) => {
                        return (
                          <Link
                            key={project.id}
                            href={`/projects/${project.slug}`}
                            onClick={onClose}
                            className="hover:border-accent/30 group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.01] p-3 transition-all duration-200 hover:bg-white/[0.04]"
                          >
                            <div className="group-hover:bg-accent flex size-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all group-hover:text-white">
                              <FileText className="size-4.5" />
                            </div>
                            <div className="flex-1 text-left">
                              <div className="text-xs font-semibold text-white sm:text-sm">
                                {project.title}
                              </div>
                              <div className="line-clamp-1 text-[10px] text-gray-400 sm:text-xs">
                                {project.client} | {project.location}
                              </div>
                            </div>
                            <ChevronRight className="size-4 text-gray-500 transition-colors group-hover:text-white" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Industries Results */}
                {filteredResults.industries.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-accent text-[10px] font-bold tracking-widest uppercase">
                      Industries ({filteredResults.industries.length})
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {filteredResults.industries.map((industry) => {
                        const IconComponent = IconMap[industry.icon] || Building2;
                        return (
                          <Link
                            key={industry.id}
                            href="/industries"
                            onClick={onClose}
                            className="hover:border-accent/30 group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.01] p-3 transition-all duration-200 hover:bg-white/[0.04]"
                          >
                            <div className="bg-accent/15 text-accent group-hover:bg-accent flex size-9 items-center justify-center rounded-lg transition-all group-hover:text-white">
                              <IconComponent className="size-4.5" />
                            </div>
                            <div className="flex-1 text-left">
                              <div className="text-xs font-semibold text-white sm:text-sm">
                                {industry.title}
                              </div>
                              <div className="line-clamp-1 text-[10px] text-gray-400 sm:text-xs">
                                {industry.shortDescription}
                              </div>
                            </div>
                            <ChevronRight className="size-4 text-gray-500 transition-colors group-hover:text-white" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
