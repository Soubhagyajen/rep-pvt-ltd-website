'use client';

import { useState, useEffect } from 'react';
import { SERVICES_DATA, SERVICES_HEADER } from '@/data/services';
import { SectionHeader } from './SectionHeader';
import { ServiceGrid } from './ServiceGrid';
import { FeaturedService } from './FeaturedService';

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState('electrical');
  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.substring(1);
      const matched = SERVICES_DATA.find((s) => s.id === hashId);
      if (matched) {
        setActiveServiceId(matched.id);
      }
    }
  }, []);

  return (
    <section
      id="services"
      className="dark:bg-background/10 border-border/40 relative w-full border-t bg-[#050e1a]/20 pt-16 pb-20 lg:pt-24 lg:pb-28 dark:border-white/5"
      aria-label="REP Pvt Ltd Engineering Services"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 1. Header component */}
        <SectionHeader
          label={SERVICES_HEADER.label}
          title={SERVICES_HEADER.title}
          description={SERVICES_HEADER.description}
        />

        {/* 2. Responsive Cards Grid */}
        <ServiceGrid
          services={SERVICES_DATA}
          activeServiceId={activeServiceId}
          onSelectService={setActiveServiceId}
        />

        {/* 3. Detailed Interactive Panel */}
        <FeaturedService service={activeService} />
      </div>
    </section>
  );
}
