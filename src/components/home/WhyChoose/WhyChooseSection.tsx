'use client';

import { WHY_CHOOSE_DATA, WHY_CHOOSE_HEADER } from '@/data/whyChoose';
import { SectionHeader } from './SectionHeader';
import { WhyChooseGrid } from './WhyChooseGrid';

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="dark:bg-background/5 border-border/40 relative w-full border-t bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 dark:border-white/5"
      aria-label="Why Choose REP Pvt Ltd"
    >
      {/* Subtle top decoration/lighting */}
      <div className="via-border/50 pointer-events-none absolute top-0 left-1/2 h-[1px] w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent dark:via-white/10" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={WHY_CHOOSE_HEADER.label}
          title={WHY_CHOOSE_HEADER.title}
          description={WHY_CHOOSE_HEADER.description}
        />

        <WhyChooseGrid items={WHY_CHOOSE_DATA} />
      </div>
    </section>
  );
}
