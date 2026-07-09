import type { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import IndustriesSection from '@/components/home/Industries/IndustriesSection';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Explore the sectors we serve with specialized turnkey MEP engineering, commercial renovations, and smart utility installations.',
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#050e1a] text-white">
      <PageHeader
        title="Industries We Empower"
        breadcrumbs={[{ label: 'Industries' }]}
        description="REP Pvt Ltd designs, deploys, and manages high-performance electrical, climate, plumbing, and automation systems tailored for commercial, healthcare, industrial, and infrastructure assets."
      />
      <IndustriesSection />
    </main>
  );
}
