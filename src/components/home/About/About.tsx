'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ABOUT_DATA } from '@/data/about';
import { Award, Eye, Check, ArrowRight } from 'lucide-react';

export function About() {
  // Stagger animation container config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  } as const;

  return (
    <section
      id="about"
      className="bg-section-background dark:bg-background/20 border-border/40 relative w-full border-t pt-14 pb-20 lg:pt-[88px] lg:pb-28 dark:border-white/5"
      aria-label="About Routray Electro Mechanical Projects"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Large Engineering Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="border-border/30 group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-slate-100 shadow-xl sm:aspect-[16/10] lg:col-span-5 lg:aspect-[4/5] dark:border-white/5 dark:bg-slate-900"
          >
            <Image
              src={ABOUT_DATA.image.src}
              alt={ABOUT_DATA.image.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Elegant lighting overlay mapping to corporate brand aesthetic */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050e1a]/40 via-transparent to-transparent" />
            <div className="bg-accent/5 pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>

          {/* Right Column: Corporate Overview and Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col space-y-6 sm:space-y-8 lg:col-span-7"
          >
            {/* 1. Small Tagline Label */}
            <motion.div variants={itemVariants}>
              <span className="font-heading text-accent text-xs font-bold tracking-widest uppercase">
                {ABOUT_DATA.tagline}
              </span>
            </motion.div>

            {/* 2. Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="font-heading text-3xl leading-[1.15] font-extrabold tracking-tight text-[#0B1F3A] sm:text-4xl dark:text-white">
                {ABOUT_DATA.titleLine1} <br />
                <span className="bg-gradient-to-r from-[#E5C07B] via-[#C89B3C] to-[#B0832F] bg-clip-text font-black text-transparent">
                  {ABOUT_DATA.titleLine2}
                </span>
              </h2>
            </motion.div>

            {/* 3. Company Description */}
            <motion.div variants={itemVariants}>
              <p className="text-text-secondary font-sans text-sm leading-relaxed sm:text-base dark:text-gray-300">
                {ABOUT_DATA.description}
              </p>
            </motion.div>

            {/* 4. Mission and Vision Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Mission Card */}
              <div className="border-border/50 rounded-xl border bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md dark:border-white/5 dark:bg-[#0B1F3A]/60">
                <div className="mb-3 flex items-center gap-3">
                  <span className="bg-accent/10 text-accent flex size-8 items-center justify-center rounded-lg">
                    <Award className="size-4.5" />
                  </span>
                  <h4 className="font-heading text-xs font-bold tracking-wider text-[#0B1F3A] uppercase dark:text-white">
                    {ABOUT_DATA.mission.title}
                  </h4>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed dark:text-gray-400">
                  {ABOUT_DATA.mission.description}
                </p>
              </div>

              {/* Vision Card */}
              <div className="border-border/50 rounded-xl border bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md dark:border-white/5 dark:bg-[#0B1F3A]/60">
                <div className="mb-3 flex items-center gap-3">
                  <span className="bg-accent/10 text-accent flex size-8 items-center justify-center rounded-lg">
                    <Eye className="size-4.5" />
                  </span>
                  <h4 className="font-heading text-xs font-bold tracking-wider text-[#0B1F3A] uppercase dark:text-white">
                    {ABOUT_DATA.vision.title}
                  </h4>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed dark:text-gray-400">
                  {ABOUT_DATA.vision.description}
                </p>
              </div>
            </motion.div>

            {/* 5. Four Feature Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-3.5 pt-2 sm:grid-cols-2"
            >
              {ABOUT_DATA.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="bg-accent/10 text-accent flex size-5 shrink-0 items-center justify-center rounded-full">
                    <Check className="size-3" />
                  </span>
                  <span className="text-text-primary text-xs font-bold tracking-wide dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* 6. CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Link
                href={ABOUT_DATA.cta.href}
                className="btn-accent-corporate group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold tracking-widest focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                {ABOUT_DATA.cta.label}
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="/assets/documents/company-profile.pdf"
                download
                className="btn-outline-corporate inline-flex cursor-pointer items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold tracking-widest transition-all duration-300"
              >
                Download Profile
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
