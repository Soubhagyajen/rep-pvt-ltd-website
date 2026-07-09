import type { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import Services from '@/components/home/Services/Services';

export const metadata: Metadata = {
  title: 'MEP Engineering Services',
  description:
    'Explore our specialist turnkey MEP engineering solutions including Electrical, HVAC, Plumbing & PHE, Fire Fighting, ELV, FAPA, and Interior Fitout works.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050e1a] text-white">
      <PageHeader
        title="MEP Engineering Services"
        breadcrumbs={[{ label: 'Services' }]}
        description="From high-voltage substation integration to high-efficiency centralized climate control and certified safety piping networks, we engineer scalable utility frameworks."
      />
      <Services />
    </main>
  );
}
