'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Target, ShieldCheck } from 'lucide-react';

export function FounderSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  };

  return (
    <section
      id="founder"
      className="dark:bg-background border-border/40 relative w-full border-t bg-white pt-16 pb-20 lg:pt-[96px] lg:pb-[112px] dark:border-white/5"
      aria-label="Founder and Leadership"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
        >
          {/* Left Column: Founder Photo Card */}
          <motion.div
            variants={itemVariants}
            className="relative flex w-full justify-center lg:col-span-5"
          >
            <div className="group relative w-full max-w-[380px] overflow-hidden rounded-[16px] border border-[#D4A43C] bg-white p-4 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-[6px] hover:scale-[1.02] md:max-w-[350px] lg:max-w-[440px] dark:bg-slate-900/60">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[12px] bg-slate-100 dark:bg-slate-800">
                <Image
                  src="/assets/images/founder.jpg"
                  alt="Mr. Chinmay Kumar Rout Ray, Founder & Managing Director, REP PVT LTD"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 350px, 440px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              {/* Text Details Below the Image */}
              <div className="mt-5 text-center select-none">
                <h3 className="font-heading text-lg font-extrabold tracking-wide text-[#0B2342] uppercase dark:text-white">
                  MR. CHINMAY KUMAR ROUT RAY
                </h3>
                <p className="mt-1.5 text-xs font-bold tracking-widest text-[#D4A43C] uppercase">
                  Founder & Managing Director
                </p>
                <p className="mt-1 text-[11px] font-semibold tracking-wider text-[#475569] uppercase dark:text-gray-400">
                  REP PVT LTD
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Title and Vision Statement */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 text-left sm:space-y-8 lg:col-span-7"
          >
            <div className="space-y-3">
              <div className="font-heading inline-flex items-center gap-2 rounded-full border border-[#D4A84F]/30 bg-[#D4A84F]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#D4A84F] uppercase">
                <Award className="h-4 w-4 text-[#D4A84F]" />
                Leadership Message
              </div>
              <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-[#0B2342] sm:text-4xl dark:text-white">
                Our Founder&apos;s Vision
              </h2>
              <div className="h-1 w-20 rounded-full bg-[#D4A84F]" />
            </div>

            <blockquote className="relative">
              {/* Quote marks background */}
              <span className="pointer-events-none absolute -top-6 -left-4 font-serif text-7xl text-[#D4A84F]/10 select-none">
                &ldquo;
              </span>
              <p className="relative z-10 text-base leading-relaxed font-medium text-[#0F172A] italic sm:text-lg dark:text-gray-100">
                &ldquo;At Routray Electro Mechanical Projects (REP) PVT LTD, our vision is to be the
                gold standard of turnkey engineering and MEP solutions across India. We believe that
                modern infrastructure is the bedrock of industrial and social progress. By
                integrating cutting-edge firefighting, ELV, plumbing, HVAC, electrical, and FAPA
                technologies, we design systems that are not only robust and highly efficient, but
                also sustainable and scale-ready for tomorrow.&rdquo;
              </p>
            </blockquote>

            <p className="text-sm leading-relaxed text-[#475569] sm:text-base dark:text-gray-300">
              Under my leadership, our dedicated team of engineering specialists remains committed
              to quality, safety, and operational excellence. We continuously strive to build
              long-term trust with our clients by delivering precise, compliant, and
              energy-optimized projects on time, every time. As we look ahead, we will continue to
              pioneer innovative engineering methodologies that empower tomorrow&apos;s commercial,
              residential, healthcare, and industrial sectors.
            </p>

            <div className="border-border grid grid-cols-1 gap-4 border-t pt-4 sm:grid-cols-2 dark:border-white/5">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg border border-[#D4A84F]/20 bg-[#D4A84F]/10 text-[#D4A84F]">
                  <Target className="size-5" />
                </span>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-[#0B2342] uppercase dark:text-white">
                    Precision Driven
                  </h4>
                  <p className="mt-0.5 text-[11px] text-[#475569] dark:text-gray-400">
                    Turnkey execution matching global standards
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg border border-[#D4A84F]/20 bg-[#D4A84F]/10 text-[#D4A84F]">
                  <ShieldCheck className="size-5" />
                </span>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-[#0B2342] uppercase dark:text-white">
                    ISO Certified Safety
                  </h4>
                  <p className="mt-0.5 text-[11px] text-[#475569] dark:text-gray-400">
                    100% regulatory and safety compliance
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
