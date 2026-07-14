import type { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { ProjectsList } from '@/components/projects/ProjectsList';

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Explore REP Pvt Ltd portfolio of completed and ongoing MEP engineering projects across India.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050e1a] pb-24 text-white">
      <PageHeader
        title="Engineering Milestones"
        breadcrumbs={[{ label: 'Projects' }]}
        description="REP Pvt Ltd has successfully delivered firefighting, extra-low voltage (ELV), plumbing, HVAC, electrical, and turnkey interior fitout solutions for residential, commercial, healthcare, hospitality, educational, and heavy industrial assets across India."
      />
      <div className="animate-in fade-in slide-in-from-bottom-5 mx-auto mt-16 w-full max-w-7xl px-4 delay-150 duration-700 sm:px-6 lg:px-8">
        <ProjectsList />
      </div>
    </main>
  );
}
