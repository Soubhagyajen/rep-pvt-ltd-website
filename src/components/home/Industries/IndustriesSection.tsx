'use client';

import { INDUSTRIES_DATA, INDUSTRIES_HEADER } from '@/data/industries';
import { SectionHeader } from './SectionHeader';
import { IndustryGrid } from './IndustryGrid';

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="bg-section-background dark:bg-background/20 border-border/40 relative w-full border-t pt-16 pb-20 lg:pt-24 lg:pb-28 dark:border-white/5"
      aria-label="Industries Served by REP Pvt Ltd"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={INDUSTRIES_HEADER.label}
          title={INDUSTRIES_HEADER.title}
          description={INDUSTRIES_HEADER.description}
        />
        <IndustryGrid industries={INDUSTRIES_DATA} />
      </div>
    </section>
  );
}
