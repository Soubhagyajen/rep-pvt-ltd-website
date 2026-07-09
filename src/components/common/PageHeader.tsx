'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  description?: string;
}

export function PageHeader({ title, breadcrumbs, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#050e1a] pt-36 pb-20 text-white select-none">
      {/* Background decorations */}
      <div className="pointer-events-none absolute top-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#C89B3C]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#1E3A5F]/20 blur-[120px]" />

      {/* Grid Pattern overlays */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animate-in fade-in slide-in-from-bottom-5 max-w-3xl space-y-4 duration-700">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-400 uppercase"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            {breadcrumbs.map((item, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="text-accent size-3 shrink-0" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="max-w-[200px] truncate text-gray-300">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Title */}
          <h1 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="max-w-2xl font-sans text-sm leading-relaxed text-gray-300 sm:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
