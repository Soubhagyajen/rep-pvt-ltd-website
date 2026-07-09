export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

export const WORKFLOW_HEADER = {
  label: 'Our Workflow',
  title: 'Our Work Process',
  description:
    'A structured engineering workflow that ensures quality, safety and timely project delivery.',
};

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: '01',
    title: 'Consultation & Requirement Analysis',
    description:
      'We collaborate with builders and architects to define load metrics, code requirements, and utility guidelines.',
  },
  {
    number: '02',
    title: 'Site Survey & Planning',
    description:
      'Our team performs spatial analysis and physical surveys to optimize routing paths and avoid clashes.',
  },
  {
    number: '03',
    title: 'Engineering Design',
    description:
      'We develop detailed schematics, single-line diagrams, and blueprints adhering strictly to NFPA/NBC standards.',
  },
  {
    number: '04',
    title: 'Procurement & Execution',
    description:
      'We source approved equipment and deploy certified technicians for safe, compliant onsite systems assembly.',
  },
  {
    number: '05',
    title: 'Testing & Commissioning',
    description:
      'Rigorous pressure, load, and alarm tests are completed before launching utility networks.',
  },
  {
    number: '06',
    title: 'Handover & Maintenance Support',
    description:
      'Complete documentation and as-built drawings are delivered, supported by preventative SLA plans.',
  },
];
