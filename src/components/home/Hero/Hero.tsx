'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { COMPANY_STATS } from '@/constants';
import { HERO_DATA } from '@/data/hero';
import { CLIENTS_DATA } from '@/data/clients';
import { ArrowRight, Award, Download } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const isDark = mounted && theme === 'dark';
  // Stagger animation container config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  } as const;

  // Badge fades down configuration
  const badgeVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  } as const;

  // Heading line-by-line reveal configuration
  const headingLineVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  } as const;

  // Paragraph fades up configuration
  const paragraphVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  } as const;

  // Buttons slide upward configuration
  const buttonVariants = {
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

  // Staggered statistics fade-in config
  const statVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  } as const;

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050e1a] pt-24"
      aria-label="Welcome Corporate Hero Banner"
    >
      {/* 1. High-Resolution Engineering Background Video with Overlay Contrast */}
      <div className="absolute inset-0 z-0">
        <motion.video
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 20,
            ease: 'easeOut',
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/images/hero-mep.webp"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="/assets/video/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        {/* 45-55% average opacity dark navy gradient overlay representing corporate brand identity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050e1a]/55 via-[#050e1a]/45 to-[#050e1a]/30 mix-blend-multiply" />
        <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-[#050e1a]/15" />
        {/* Engineering structural grid mapping */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] bg-[size:4rem_4rem]" />
      </div>

      {/* 2. Content Layout Structure */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 md:pt-32 md:pb-24 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-5 sm:space-y-6"
        >
          {/* Tagline / Subtitle Badge Element */}
          <motion.div
            variants={badgeVariants}
            className="font-heading inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/30 bg-[#C89B3C]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#C89B3C] uppercase"
          >
            <Award className="h-4 w-4 text-[#C89B3C]" />
            {HERO_DATA.tagline}
          </motion.div>

          {/* Headline */}
          <h1 className="font-heading flex flex-col gap-2 text-3xl leading-[1.15] font-extrabold tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block overflow-hidden py-1">
              <motion.span variants={headingLineVariants} className="block">
                {HERO_DATA.titleLine1}
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                variants={headingLineVariants}
                className="block bg-gradient-to-r from-[#E5C07B] via-[#C89B3C] to-[#B0832F] bg-clip-text font-black text-transparent"
              >
                {HERO_DATA.titleLine2}
              </motion.span>
            </span>
          </h1>

          {/* Sub-Branding */}
          <motion.div
            variants={badgeVariants}
            className="font-heading text-accent text-xs leading-relaxed font-black tracking-[4px] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] select-none sm:text-sm"
          >
            ROUTRAY ELECTRO MECHANICAL PROJECTS (REP) PVT LTD
          </motion.div>

          {/* Subheadline detailing specialties */}
          <motion.p
            variants={paragraphVariants}
            className="max-w-3xl font-sans text-sm leading-relaxed text-gray-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] sm:text-base dark:text-gray-300"
          >
            ISO 9001:2015 Certified MEP Engineering Company delivering turnkey{' '}
            <span className="font-semibold text-white">
              Electrical, HVAC, Plumbing, Fire Fighting, ELV
            </span>{' '}
            and <span className="font-semibold text-white">FAPA</span> solutions across commercial,
            residential, healthcare and industrial infrastructure across India.
          </motion.p>

          {/* Premium CTAs */}
          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Link
                href={HERO_DATA.ctaPrimary.href}
                className="btn-accent-corporate group inline-flex w-full items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(200,155,60,0.5)] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:w-auto"
              >
                {HERO_DATA.ctaPrimary.label}
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </motion.div>

            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Link
                href={HERO_DATA.ctaSecondary.href}
                className="btn-outline-corporate focus-visible:ring-accent inline-flex w-full items-center justify-center border-white/20 px-7 py-3.5 text-xs font-bold tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(200,155,60,0.3)] focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
              >
                {HERO_DATA.ctaSecondary.label}
              </Link>
            </motion.div>

            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <a
                href="/assets/documents/company-profile.pdf"
                download
                className="btn-outline-corporate focus-visible:ring-accent inline-flex w-full items-center justify-center gap-2 border-[#C89B3C]/40 px-7 py-3.5 text-xs font-bold tracking-widest text-[#C89B3C] transition-all duration-300 hover:-translate-y-1 hover:border-[#C89B3C] hover:bg-[#C89B3C]/10 hover:shadow-[0_0_20px_rgba(200,155,60,0.3)] focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Download Company Profile
              </a>
            </motion.div>
          </div>

          {/* 3. Trust Indicators Section (Scrolling Marquee) */}
          <motion.div
            variants={paragraphVariants}
            className="flex w-full flex-col gap-4 overflow-hidden border-t border-white/5 pt-6"
          >
            <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
              TRUSTED BY LEADING BUILDERS
            </p>
            <div className="mask-marquee relative flex w-full overflow-x-hidden">
              <div className="animate-marquee flex items-center gap-12">
                {/* First set */}
                {HERO_DATA.trust.clients.map((clientName) => {
                  const clientObj = CLIENTS_DATA.find(
                    (c) => c.name.toLowerCase() === clientName.toLowerCase(),
                  );
                  return (
                    <div
                      key={clientName}
                      className={`relative h-7 w-24 shrink-0 transition-all duration-300 select-none sm:w-28 ${
                        isDark
                          ? 'opacity-70 brightness-[1.15] drop-shadow-[0_0_6px_rgba(255,255,255,0.15)] grayscale-[40%] hover:-translate-y-1 hover:scale-[1.08] hover:opacity-100 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.45)] hover:grayscale-0'
                          : 'rounded-lg border border-transparent bg-white/60 px-2 py-1 opacity-100 shadow-[0_2px_8px_rgba(11,35,66,0.08)] grayscale-0 hover:-translate-y-1 hover:scale-[1.08] hover:border-[#D4A84F]/40 hover:shadow-[0_4px_16px_rgba(212,168,79,0.18)]'
                      }`}
                    >
                      {clientObj?.logo ? (
                        <Image
                          src={clientObj.logo}
                          alt={clientName}
                          fill
                          sizes="112px"
                          className="object-contain"
                        />
                      ) : (
                        <span
                          className={`text-xs font-bold tracking-widest uppercase transition-colors duration-200 ${
                            isDark
                              ? 'text-gray-400 hover:text-white'
                              : 'text-[#0F172A] hover:text-[#D4A84F]'
                          }`}
                        >
                          {clientName}
                        </span>
                      )}
                    </div>
                  );
                })}
                {/* Duplicate set for seamless looping */}
                {HERO_DATA.trust.clients.map((clientName) => {
                  const clientObj = CLIENTS_DATA.find(
                    (c) => c.name.toLowerCase() === clientName.toLowerCase(),
                  );
                  return (
                    <div
                      key={`${clientName}-dup`}
                      className={`relative h-7 w-24 shrink-0 transition-all duration-300 select-none sm:w-28 ${
                        isDark
                          ? 'opacity-70 brightness-[1.15] drop-shadow-[0_0_6px_rgba(255,255,255,0.15)] grayscale-[40%] hover:-translate-y-1 hover:scale-[1.08] hover:opacity-100 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.45)] hover:grayscale-0'
                          : 'rounded-lg border border-transparent bg-white/60 px-2 py-1 opacity-100 shadow-[0_2px_8px_rgba(11,35,66,0.08)] grayscale-0 hover:-translate-y-1 hover:scale-[1.08] hover:border-[#D4A84F]/40 hover:shadow-[0_4px_16px_rgba(212,168,79,0.18)]'
                      }`}
                    >
                      {clientObj?.logo ? (
                        <Image
                          src={clientObj.logo}
                          alt={clientName}
                          fill
                          sizes="112px"
                          className="object-contain"
                        />
                      ) : (
                        <span
                          className={`text-xs font-bold tracking-widest uppercase transition-colors duration-200 ${
                            isDark
                              ? 'text-gray-400 hover:text-white'
                              : 'text-[#0F172A] hover:text-[#D4A84F]'
                          }`}
                        >
                          {clientName}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 4. Statistics glassmorphic cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 md:grid-cols-4 md:gap-6"
        >
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={statVariants}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
              className="group flex min-h-[100px] flex-col justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#C89B3C]/30 hover:bg-white/[0.04] sm:p-5"
            >
              <p className="font-heading text-2xl font-black tracking-tight text-[#C89B3C] transition-transform duration-300 group-hover:scale-[1.02] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] font-bold tracking-widest text-gray-400 uppercase transition-colors duration-300 group-hover:text-white">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 5. Elegant Ambient Highlights */}
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C89B3C]/5 blur-[140px]" />
      <div className="pointer-events-none absolute top-12 left-12 h-96 w-96 rounded-full bg-[#0B1F3A]/20 blur-[120px]" />
    </section>
  );
}
