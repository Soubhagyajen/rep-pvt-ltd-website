'use client';

import type { Client } from '@/data/clients';
import { ClientLogo } from './ClientLogo';

interface ClientGridProps {
  clients: Client[];
}

export function ClientGrid({ clients }: ClientGridProps) {
  return (
    <div
      className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:gap-6 lg:grid-cols-4"
      role="list"
      aria-label="Trusted client logos"
    >
      {clients.map((client, index) => (
        <ClientLogo key={client.id} client={client} index={index} />
      ))}
    </div>
  );
}
