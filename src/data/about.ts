export interface AboutData {
  tagline: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
  features: string[];
  image: {
    src: string;
    alt: string;
  };
  cta: {
    label: string;
    href: string;
  };
}

export const ABOUT_DATA: AboutData = {
  tagline: 'About REP PVT LTD',
  titleLine1: 'Engineering Infrastructure',
  titleLine2: 'With Absolute Precision',
  description:
    'Routray Electro Mechanical Projects Pvt. Ltd. (REP PVT LTD) is an industry-leading MEP contracting firm providing turnkey design, engineering, procurement, and execution matrices. We unify specialist engineering disciplines under a singular stamp of quality, delivering resilient and energy-optimized systems for heavy industrial complexes, IT parks, high-rise healthcare units, and corporate hubs.',
  mission: {
    title: 'Our Mission',
    description:
      'To design and deploy advanced mechanical, electrical, and public health systems that guarantee resilience, sustainability, and operational compliance.',
  },
  vision: {
    title: 'Our Vision',
    description:
      "To remain India's most trusted engineering partner, setting benchmarks for turnkey execution, site safety compliance, and technological standard integration.",
  },
  features: [
    'ISO 9001:2015 Quality Standards',
    '100% Safety & Regulatory Compliance',
    '80+ Certified In-House Engineers',
    'Complete Turnkey Design & Execution',
  ],
  image: {
    src: '/images/about/about-mep.webp',
    alt: 'Heavy mechanical machinery and high-precision building utility pipeline networks engineered by REP Pvt Ltd',
  },
  cta: {
    label: 'Read Company Profile',
    href: '/about',
  },
};
