export interface HeroData {
  tagline: string;
  titleLine1: string;
  titleLine2: string;
  descriptionPrefix: string;
  descriptionSpecialties: string[];
  descriptionSuffix: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
  trust: {
    label: string;
    clients: string[];
  };
}

export const HERO_DATA: HeroData = {
  tagline: 'ISO 9001:2015 Certified MEP Engineering Company',
  titleLine1: 'Engineering Excellence',
  titleLine2: 'Under One Roof',
  descriptionPrefix:
    'REP PVT LTD designs and deploys sustainable, scale-ready corporate utility infrastructure. We unify specialist services in ',
  descriptionSpecialties: ['Fire Fighting', 'ELV', 'Plumbing', 'HVAC', 'Electrical', 'FAPA'],
  descriptionSuffix: ' networks under a singular stamp of quality.',
  ctaPrimary: {
    label: 'Explore Services',
    href: '/services',
  },
  ctaSecondary: {
    label: 'View Projects',
    href: '/projects',
  },
  trust: {
    label: 'Trusted by Leading Builders',
    clients: [
      'Lodha',
      'TB',
      'JV Ventures',
      'My Home Group',
      'Aparna',
      'Signature Avenues',
      'Supadha',
      'Stanley Medical College',
    ],
  },
};
