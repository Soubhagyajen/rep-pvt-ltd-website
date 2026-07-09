import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import WhyChooseSection from '@/components/home/WhyChoose/WhyChooseSection';
import Services from '@/components/home/Services/Services';
import IndustriesSection from '@/components/home/Industries/IndustriesSection';
import ClientsSection from '@/components/home/Clients/ClientsSection';
import WorkflowSection from '@/components/home/Workflow/WorkflowSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhyChooseSection />
      <Services />
      <IndustriesSection />
      <ClientsSection />
      <WorkflowSection />
    </main>
  );
}
