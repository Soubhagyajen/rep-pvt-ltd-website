'use client';

import { motion } from 'framer-motion';
import { WORKFLOW_STEPS } from '@/data/workflow';
import { WorkflowCard } from './WorkflowCard';

export function WorkflowTimeline() {
  return (
    <div className="relative w-full">
      {/* 1. Desktop Horizontal Timeline */}
      <div className="relative hidden w-full lg:block">
        {/* Background horizontal connector line behind circles */}
        <div className="bg-border/50 absolute top-5 right-0 left-0 -z-10 h-0.5 dark:bg-white/5" />

        {/* Animated progressive gold horizontal connector line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="from-accent absolute top-5 left-0 -z-10 h-0.5 bg-gradient-to-r to-[#E5C07B]"
        />

        {/* 6 Steps Grid - stretching to equal height */}
        <div className="relative grid grid-cols-6 items-stretch gap-5">
          {WORKFLOW_STEPS.map((step, index) => (
            <div key={step.number} className="flex h-full flex-col items-center">
              {/* Stepper node circle (Gold border, white center, gold text) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: index * 0.08 }}
                className="border-accent text-accent font-heading z-10 flex size-10 cursor-default items-center justify-center rounded-full border-2 bg-white text-sm font-extrabold shadow-sm select-none dark:bg-[#08121e]"
              >
                {step.number}
              </motion.div>

              {/* Thin vertical line connecting marker to corresponding card */}
              <div className="bg-accent/30 h-4 w-[2px] dark:bg-white/10" />

              {/* Step Card wrapper stretching to equal height */}
              <div className="w-full flex-1">
                <WorkflowCard step={step} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Mobile / Tablet Vertical Timeline */}
      <div className="relative space-y-6 pl-8 sm:pl-10 lg:hidden">
        {/* Background vertical connector line */}
        <div className="bg-border/50 absolute top-4 bottom-4 left-[15px] -z-10 w-0.5 sm:left-[19px] dark:bg-white/5" />

        {/* Animated progressive gold vertical connector line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="from-accent absolute top-4 left-[15px] -z-10 w-0.5 origin-top bg-gradient-to-b to-[#E5C07B] sm:left-[19px]"
        />

        {WORKFLOW_STEPS.map((step, index) => (
          <div key={step.number} className="relative flex flex-col items-start">
            {/* Stepper node circle (Gold border, white center, gold text) */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: index * 0.06 }}
              className="border-accent text-accent font-heading absolute top-1 -left-[33px] z-10 flex size-8 cursor-default items-center justify-center rounded-full border-2 bg-white text-xs font-extrabold shadow-sm select-none sm:-left-[37px] sm:size-10 sm:text-sm dark:bg-[#08121e]"
            >
              {step.number}
            </motion.div>

            {/* Step Card */}
            <div className="mt-1 w-full">
              <WorkflowCard step={step} index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
