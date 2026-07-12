import dynamic from 'next/dynamic';
import { Hero } from '@/components/home/Hero';

const About = dynamic(() => import('@/components/home/About').then((m) => m.About));
const WhyChooseSection = dynamic(() => import('@/components/home/WhyChoose/WhyChooseSection'));
const Services = dynamic(() => import('@/components/home/Services/Services'));
const IndustriesSection = dynamic(() => import('@/components/home/Industries/IndustriesSection'));
const ClientsSection = dynamic(() => import('@/components/home/Clients/ClientsSection'));
const WorkflowSection = dynamic(() => import('@/components/home/Workflow/WorkflowSection'));

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
