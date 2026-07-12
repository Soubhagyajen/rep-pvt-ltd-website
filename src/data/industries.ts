export interface Industry {
  id: string;
  title: string;
  icon: string;
  imageUrl: string;
  shortDescription: string;
}

export const INDUSTRIES_HEADER = {
  label: 'Industries We Serve',
  title: 'Trusted Across Sectors',
  description:
    "From corporate towers to critical healthcare facilities, our MEP engineering solutions power India's most demanding infrastructure.",
};

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'commercial',
    title: 'Commercial Buildings',
    icon: 'Building2',
    imageUrl: '/images/industries/commercial.webp',
    shortDescription:
      'Complete turnkey MEP infrastructure for corporate office buildings, business hubs, and executive spaces.',
  },
  {
    id: 'residential',
    title: 'Residential Complexes',
    icon: 'Home',
    imageUrl: '/images/industries/residential.webp',
    shortDescription:
      'End-to-end electrical, plumbing, fire protection, and automation systems for high-rise apartments and gated communities.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: 'HeartPulse',
    imageUrl: '/images/industries/healthcare.webp',
    shortDescription:
      'Specialized, compliant MEP installations for hospitals, diagnostics clinics, medical labs, and critical care units.',
  },
  {
    id: 'industrial',
    title: 'Industrial Facilities',
    icon: 'Factory',
    imageUrl: '/images/industries/industrial.webp',
    shortDescription:
      'Heavy-duty electrical panels, ventilation, exhaust, and fire suppression systems for factories and process plants.',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    icon: 'Hotel',
    imageUrl: '/images/industries/hospitality.webp',
    shortDescription:
      'Premium climate control, architectural lighting, and safety networks for luxury hotels, resorts, and convention spaces.',
  },
  {
    id: 'education',
    title: 'Educational Institutions',
    icon: 'GraduationCap',
    imageUrl: '/images/industries/education.webp',
    shortDescription:
      'Smart campus utility grids, high-efficiency HVAC, computer labs ELV, and safety infrastructure for colleges and universities.',
  },
  {
    id: 'it-parks',
    title: 'IT Parks',
    icon: 'Server',
    imageUrl: '/images/industries/it-parks.webp',
    shortDescription:
      'High-density server room cooling, redundant generator grids, and structured network backbones for corporate campuses.',
  },
  {
    id: 'retail',
    title: 'Retail Developments',
    icon: 'Building2',
    imageUrl: '/images/industries/retail.webp',
    shortDescription:
      'Scale-ready central HVAC distribution, decorative display lighting, and life-safety systems for retail spaces and shopping malls.',
  },
];
