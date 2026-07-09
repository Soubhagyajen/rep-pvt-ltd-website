import type { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: 'Project Gallery',
  description:
    'Browse high-resolution photographs of our completed mechanical, electrical, HVAC, and interior fitout installations across India.',
};

export default function GalleryPage() {
  return (
    <main className="bg-background text-foreground min-h-screen pb-24 transition-colors duration-300">
      <PageHeader
        title="Our Project Gallery"
        breadcrumbs={[{ label: 'Gallery' }]}
        description="A visual showcase of Routray Electro Mechanical Projects' engineering craftsmanship, structural integrations, and turnkey design executions."
      />
      <div className="animate-in fade-in slide-in-from-bottom-5 mx-auto mt-16 w-full max-w-7xl px-4 delay-150 duration-700 sm:px-6 lg:px-8">
        <GalleryGrid />
      </div>
    </main>
  );
}
