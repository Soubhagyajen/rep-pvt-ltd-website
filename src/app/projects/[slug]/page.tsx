import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PROJECTS_DATA } from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import {
  Building,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  AlertTriangle,
  FolderKanban,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | REP Pvt Ltd',
    };
  }

  return {
    title: `${project.title} | Projects | REP Pvt Ltd`,
    description: project.overview,
  };
}

// Generate static params for Next.js build-time pre-rendering
export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Get related projects in the same category (excluding current)
  const relatedProjects = PROJECTS_DATA.filter(
    (p) => p.category === project.category && p.slug !== project.slug,
  ).slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050e1a] pt-24 pb-24 text-white">
      {/* 1. Dynamic Hero Banner Block */}
      <section className="relative flex h-[60vh] min-h-[400px] w-full items-end select-none">
        <div className="absolute inset-0">
          <Image
            src={project.heroImage || ''}
            alt={project.title}
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a] via-[#050e1a]/40 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="text-accent size-3" />
            <Link href="/projects" className="hover:text-accent transition-colors">
              Projects
            </Link>
            <ChevronRight className="text-accent size-3" />
            <span className="max-w-[200px] truncate text-gray-300">{project.title}</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap gap-2.5">
              <span className="font-heading bg-accent rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-sm">
                {project.category}
              </span>
              <span
                className={`rounded-full border px-3 py-1 text-[10px] font-bold tracking-widest uppercase shadow-sm ${
                  project.status === 'Completed'
                    ? 'bg-success/80 border-success/30 text-white'
                    : 'bg-warning/80 border-warning/30 text-white'
                }`}
              >
                {project.status}
              </span>
            </div>

            <h1 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Main content block */}
      <section className="relative z-10 mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column (Overview, Scope, Challenges, Gallery) */}
          <div className="space-y-10 lg:col-span-8">
            {/* Overview */}
            <div className="space-y-4">
              <h3 className="font-heading border-accent border-l-2 pl-4 text-lg font-bold tracking-wider text-white uppercase sm:text-xl">
                Project Overview
              </h3>
              <p className="font-sans text-sm leading-relaxed text-gray-300 sm:text-base">
                {project.overview}
              </p>
            </div>

            {/* Scope of Work */}
            <div className="space-y-5">
              <h3 className="font-heading border-accent border-l-2 pl-4 text-lg font-bold tracking-wider text-white uppercase sm:text-xl">
                Scope of Work
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.scopeOfWork.map((scope, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <CheckCircle2 className="text-accent mt-0.5 size-5 shrink-0" />
                    <span className="text-xs leading-relaxed font-medium text-gray-300 sm:text-sm">
                      {scope}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Challenges */}
              <div className="bg-danger/5 border-danger/10 space-y-3 rounded-2xl border p-5">
                <div className="text-danger flex items-center gap-2">
                  <AlertTriangle className="size-5" />
                  <h4 className="font-heading text-xs font-bold tracking-wider uppercase">
                    Key Challenges
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
                  {project.challenges}
                </p>
              </div>

              {/* Solutions */}
              <div className="bg-success/5 border-success/10 space-y-3 rounded-2xl border p-5">
                <div className="text-success flex items-center gap-2">
                  <Lightbulb className="size-5" />
                  <h4 className="font-heading text-xs font-bold tracking-wider uppercase">
                    Our Solutions
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
                  {project.solutions}
                </p>
              </div>
            </div>

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-5">
                <h3 className="font-heading border-accent border-l-2 pl-4 text-lg font-bold tracking-wider text-white uppercase sm:text-xl">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {project.gallery.map((image, idx) => (
                    <div
                      key={idx}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/5 bg-slate-900 select-none"
                    >
                      <Image
                        src={image}
                        alt={`Project gallery frame ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (Client card, Stats, Services side block) */}
          <div className="space-y-6 lg:col-span-4">
            {/* 1. Client Card details */}
            <div className="space-y-5 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="font-heading text-accent flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                <Building className="size-4" />
                <span>Client Information</span>
              </h3>

              <div className="space-y-3 pt-2 text-xs select-none sm:text-sm">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-medium text-gray-400">Client Name</span>
                  <span className="text-right font-bold text-white">{project.client}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-medium text-gray-400">Location</span>
                  <span className="text-right font-bold text-white">{project.location}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-medium text-gray-400">Status</span>
                  <span className="text-accent text-right font-bold">{project.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-400">Year Completed</span>
                  <span className="text-right font-bold text-white">
                    {project.status === 'Completed' ? project.completionYear : 'Ongoing'}
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Project Statistics */}
            <div className="space-y-5 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="font-heading text-accent flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                <FolderKanban className="size-4" />
                <span>Project Statistics</span>
              </h3>

              <div className="grid grid-cols-1 gap-4 pt-2">
                {project.stats?.map((stat, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <p className="font-numbers text-2xl font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Services Provided checklist */}
            <div className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="font-heading text-accent text-xs font-bold tracking-widest uppercase">
                Services Provided
              </h3>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm">
                {project.servicesProvided?.map((service, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-accent mt-0.5 size-4 shrink-0" />
                    <span className="leading-normal text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Related Projects Block */}
        {relatedProjects.length > 0 && (
          <div className="mt-20 space-y-8 border-t border-white/5 pt-10">
            <div className="max-w-2xl">
              <span className="font-heading text-accent text-xs font-bold tracking-widest uppercase">
                Similar Projects
              </span>
              <h2 className="font-heading mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                Related Portfolios
              </h2>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {relatedProjects.map((p, index) => (
                <ProjectCard key={p.slug} project={p} index={index} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
