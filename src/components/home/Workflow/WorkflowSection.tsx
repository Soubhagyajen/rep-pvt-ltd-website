'use client';

import { WORKFLOW_HEADER } from '@/data/workflow';
import { SectionHeader } from './SectionHeader';
import { WorkflowTimeline } from './WorkflowTimeline';

export default function WorkflowSection() {
  return (
    <section
      id="work-process"
      className="bg-section-background dark:bg-background/20 border-border/40 relative w-full border-t pt-16 pb-20 lg:pt-24 lg:pb-28 dark:border-white/5"
      aria-label="REP Pvt Ltd Engineering Work Process"
    >
      {/* Subtle top decoration/lighting line */}
      <div className="via-border/50 pointer-events-none absolute top-0 left-1/2 h-[1px] w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent dark:via-white/10" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={WORKFLOW_HEADER.label}
          title={WORKFLOW_HEADER.title}
          description={WORKFLOW_HEADER.description}
        />

        <WorkflowTimeline />
      </div>
    </section>
  );
}
