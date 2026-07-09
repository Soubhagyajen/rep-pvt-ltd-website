import type { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { About } from '@/components/home/About';
import { FounderSection } from '@/components/home/Founder/FounderSection';
import WhyChooseSection from '@/components/home/WhyChoose/WhyChooseSection';
import WorkflowSection from '@/components/home/Workflow/WorkflowSection';

export const metadata: Metadata = {
  title: 'About Our Firm',
  description:
    'Learn about Routray Electro Mechanical Projects Pvt. Ltd. (REP Pvt Ltd), our engineering mission, vision, ISO certifications, and turnkey MEP workflow.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050e1a] text-white">
      <PageHeader
        title="About Our Firm"
        breadcrumbs={[{ label: 'About' }]}
        description="Routray Electro Mechanical Projects Pvt. Ltd. (REP Pvt Ltd) is a leading MEP contracting and engineering firm offering turnkey design, procurement, and execution matrices."
      />
      <About />
      <FounderSection />
      <WhyChooseSection />
      <WorkflowSection />
    </main>
  );
}
