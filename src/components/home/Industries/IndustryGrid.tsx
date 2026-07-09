'use client';

import type { Industry } from '@/data/industries';
import { IndustryCard } from './IndustryCard';

interface IndustryGridProps {
  industries: Industry[];
}

export function IndustryGrid({ industries }: IndustryGridProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {industries.map((industry, index) => (
        <IndustryCard key={industry.id} industry={industry} index={index} />
      ))}
    </div>
  );
}
