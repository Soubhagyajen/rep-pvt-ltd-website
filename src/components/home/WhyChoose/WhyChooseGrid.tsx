'use client';

import type { WhyChooseItem } from '@/data/whyChoose';
import { WhyChooseCard } from './WhyChooseCard';

interface WhyChooseGridProps {
  items: WhyChooseItem[];
}

export function WhyChooseGrid({ items }: WhyChooseGridProps) {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
      {items.map((item, index) => (
        <WhyChooseCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
