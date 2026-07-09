'use client';

import { CLIENTS_DATA, CLIENTS_HEADER } from '@/data/clients';
import { SectionHeader } from './SectionHeader';
import { ClientGrid } from './ClientGrid';

export default function ClientsSection() {
  return (
    <section
      id="projects"
      className="dark:bg-background/10 border-border/40 relative w-full border-t bg-[#050e1a]/20 pt-16 pb-20 lg:pt-24 lg:pb-28 dark:border-white/5"
      aria-label="Trusted Clients of REP Pvt Ltd"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionHeader
          label={CLIENTS_HEADER.label}
          title={CLIENTS_HEADER.title}
          description={CLIENTS_HEADER.description}
        />

        {/* Responsive client logo grid */}
        <ClientGrid clients={CLIENTS_DATA} />
      </div>
    </section>
  );
}
