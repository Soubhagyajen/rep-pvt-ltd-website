'use client';

import { motion } from 'framer-motion';
import { Service } from '@/types';
import { ServiceCard } from './ServiceCard';

interface ServiceGridProps {
  services: Service[];
  activeServiceId: string;
  onSelectService: (id: string) => void;
}

export function ServiceGrid({ services, activeServiceId, onSelectService }: ServiceGridProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
    >
      {services.map((service) => (
        <motion.div
          key={service.id}
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
            },
          }}
        >
          <ServiceCard
            service={service}
            isActive={service.id === activeServiceId}
            onSelect={() => onSelectService(service.id)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
