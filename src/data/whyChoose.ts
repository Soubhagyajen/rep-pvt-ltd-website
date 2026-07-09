export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const WHY_CHOOSE_HEADER = {
  label: 'Our Value Proposition',
  title: 'Why Choose REP',
  description:
    "We combine engineering excellence, international safety compliance, and robust execution management to build tomorrow's infrastructure.",
};

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    id: 'turnkey-mep',
    title: 'Turnkey MEP Solutions',
    description:
      'From design and engineering to procurement and final testing, we provide single-source accountability for complex MEP systems.',
    icon: 'Layers',
  },
  {
    id: 'iso-certified',
    title: 'ISO 9001:2015 Certified',
    description:
      'Our commitment to international quality standard matrices ensures that every phase of execution meets strict regulatory parameters.',
    icon: 'Award',
  },
  {
    id: 'experienced-team',
    title: 'Experienced Engineering Team',
    description:
      'Backed by a core group of certified, industry-certified mechanical, electrical, and plumbing engineering specialists.',
    icon: 'Users',
  },
  {
    id: 'safety-first',
    title: 'Safety First',
    description:
      'Zero compromise on safety. We enforce rigorous hazard management protocols to maintain a zero-incident track record.',
    icon: 'Shield',
  },
  {
    id: 'on-time-delivery',
    title: 'On-Time Delivery',
    description:
      'Using advanced project management tracking to guarantee timely completion of engineering milestones and handovers.',
    icon: 'Clock',
  },
  {
    id: 'modern-tech',
    title: 'Modern Technology',
    description:
      'Leveraging BIM models, smart building intelligence, and precision tools for optimal resource utilization.',
    icon: 'Cpu',
  },
];
