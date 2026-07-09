'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Client } from '@/data/clients';

interface ClientLogoProps {
  client: Client;
  index: number;
}

export function ClientLogo({ client, index }: ClientLogoProps) {
  const { name, logo } = client;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{
        y: -4,
        scale: 1.03,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      className="group border-border/50 hover:border-accent/40 relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8 dark:border-white/10 dark:bg-white"
      role="listitem"
      aria-label={`Trusted client: ${name}`}
    >
      <Image
        src={logo}
        alt={name}
        width={160}
        height={80}
        className="max-h-[80px] w-auto object-contain transition-all duration-300 group-hover:scale-105"
      />

      {/* Subtle gold accent line on hover */}
      <div className="via-accent absolute right-0 bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}
