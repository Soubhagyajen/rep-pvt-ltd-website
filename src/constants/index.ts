/**
 * Global Constants for REP PVT LTD
 * Centralized configuration for menus, company info, services, SEO metadata, and social links.
 */

export const SITE_CONFIG = {
  name: 'REP PVT LTD',
  shortName: 'REP',
  description:
    'Leading MEP Engineering & Interior Fitout Specialists. Delivering Fire Fighting, ELV, Plumbing, HVAC, Electrical, FAPA, and Fitout services.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.repmep.com',
  ogImage: '/assets/images/og-image.jpg',
  contactEmail: 'ck@reppvtltd.com',
  secondaryEmail: 'sales@reppvtltd.com',
  phone: '+91 8885730743',
  whatsapp: '918885730743',
  corporateOffice: {
    label: 'Corporate Office',
    street: 'MCH 393, MIG-1, Ground Floor, KPHB Colony, Phase-1, Kukatpally',
    city: 'Hyderabad',
    state: 'Telangana',
    zip: '500072',
    country: 'India',
  },
  branchOffice: {
    label: 'Branch Office',
    street: 'Plot No-753/2562, Balisahi, Madhupatna',
    city: 'Cuttack',
    state: 'Odisha',
    zip: '754032',
    country: 'India',
  },
  // Keep legacy address for backwards compat
  address: {
    street: 'MCH 393, MIG-1, Ground Floor, KPHB Colony, Phase-1, Kukatpally',
    city: 'Hyderabad',
    state: 'Telangana',
    zip: '500072',
    country: 'India',
  },
  social: {
    linkedin: 'https://linkedin.com/company/rep-pvt-ltd',
    twitter: 'https://twitter.com/rep_mep',
    facebook: 'https://facebook.com/rep.mep',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Industries', href: '/industries' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: 'fire-fighting',
    title: 'Fire Fighting',
    shortDescription:
      'Certified sprinkler systems, hydrant networks, gas suppression, and life-safety systems.',
    description:
      'Complete life safety fire protection systems. Engineered to international standards (NFPA, NBC), ensuring early detection, containment, and rapid suppression of fire hazards.',
    icon: 'Flame',
    slug: 'fire-fighting-protection-systems',
    features: [
      'Automatic sprinkler and wet-riser hydrant systems',
      'Clean Agent (FM200 / Novec) gas suppression',
      'Fire pumps and storage reservoir design',
      'Portable extinguishers and safety signage',
      'Compliance and safety audits',
    ],
  },
  {
    id: 'elv',
    title: 'ELV',
    shortDescription: 'Extra-low voltage networks, CCTV, access control, and IT infrastructure.',
    description:
      'Extra-low voltage system integrations that serve as the technological spine of modern structures, including surveillance, structured cabling, and smart automation systems.',
    icon: 'Cpu',
    slug: 'elv-systems',
    features: [
      'Structured cabling and LAN/WiFi architecture',
      'IP CCTV Surveillance and Access Control matrices',
      'Audio-Visual (AV) and board room automation',
      'Home and building automation systems',
    ],
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    shortDescription:
      'Water supply distribution, water treatment plants, sewage treatment, and drainage layouts.',
    description:
      'Sustainable water resources engineering. We implement advanced water saving technologies, water treatment configurations, and drainage systems that minimize ecological impact.',
    icon: 'Droplet',
    slug: 'plumbing-public-health-engineering',
    features: [
      'Hydro-pneumatic domestic water distribution',
      'Sewage Treatment Plants (STP) & Effluent Treatment Plants (ETP)',
      'Rainwater harvesting and reuse networks',
      'Water Treatment (WTP) and softening grids',
      'Soil, Waste, and Vent piping systems',
    ],
  },
  {
    id: 'hvac',
    title: 'HVAC',
    shortDescription:
      'Centralized chilled water plants, VRF systems, mechanical ventilation, and filtration.',
    description:
      'Our HVAC designs prioritize climate control, energy efficiency, and IAQ (Indoor Air Quality). We model custom airflow profiles for commercial spaces, hospitals, data centers, and industrial facilities.',
    icon: 'Wind',
    slug: 'hvac-ventilation-air-conditioning',
    features: [
      'Chiller Plant and VRF system configurations',
      'Mechanical ventilation & smoke extraction systems',
      'Air Handling Units (AHU) & duct routing layout',
      'Precision air conditioning for data centers',
      'Building Management System (BMS) integration',
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical',
    shortDescription:
      'High-tension & low-tension power distribution, substations, lighting, and backup power.',
    description:
      'We deliver comprehensive electrical solutions from high-voltage substation engineering to complex internal building circuitry. Our services ensure robust, reliable, and energy-efficient power flow throughout the infrastructure.',
    icon: 'Zap',
    slug: 'electrical-engineering',
    features: [
      'Substation and Transformer installation',
      'HT & LT Panels and Cable routing',
      'Internal & External Lighting Systems',
      'DG Sets and UPS Backup systems',
      'Lightning protection and earthing grids',
    ],
  },
  {
    id: 'fapa',
    title: 'FAPA',
    shortDescription:
      'Fire alarm systems, smoke detection grids, and public address communication.',
    description:
      'State-of-the-art Fire Alarm and Public Address (FAPA) solutions designed to facilitate rapid evacuation, automated detection alerts, and centralized life safety command.',
    icon: 'Activity',
    slug: 'fapa-systems',
    features: [
      'Addressable Fire Alarm and Smoke Detection grids',
      'Public Address & Emergency Voice Evacuation systems',
      'Integration with HVAC smoke control dampeners',
      'Evacuation mapping and testing services',
    ],
  },
  {
    id: 'fitout',
    title: 'Interior Fitout',
    shortDescription:
      'End-to-end commercial interior design, civil works, partitions, and false ceilings.',
    description:
      'Transforming shell and core spaces into functional, premium, and aesthetically stunning workspaces. We combine MEP expertise with high-end interior detailing to deliver flawless turnkey execution.',
    icon: 'Layout',
    slug: 'interior-fitouts-turnkey-solutions',
    features: [
      'Turnkey office interior design and space planning',
      'Drywall partitions, glass glazing, and false ceilings',
      'Acoustic wall paneling and sound attenuation',
      'Custom joinery, loose furniture, and workspaces',
      'Flooring, carpet tile installations, and wall finishes',
    ],
  },
];

export const COMPANY_STATS = [
  { value: '20+', label: 'Projects Completed' },
  { value: 'ISO', label: '9001:2015 Certified' },
  { value: '6', label: 'Core Engineering Services' },
  { value: 'Trusted', label: 'by Leading Builders' },
];

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', authority: 'Quality Management System' },
  { name: 'ISO 14001:2015', authority: 'Environmental Management System' },
  { name: 'ISO 45001:2018', authority: 'Occupational Health & Safety' },
];

export const OFFICE_LOCATIONS = [
  {
    city: 'Bengaluru (HQ)',
    address: 'REP Towers, 4th Block, Koramangala, Bengaluru, Karnataka - 560034',
    phone: '+91 80 4123 4567',
    email: 'blr@repmep.com',
  },
  {
    city: 'Chennai',
    address: 'REP Chambers, Mount Road, Nandanam, Chennai, Tamil Nadu - 600035',
    phone: '+91 44 4234 5678',
    email: 'maa@repmep.com',
  },
  {
    city: 'Hyderabad',
    address: 'REP Hub, HITEC City, Madhapur, Hyderabad, Telangana - 500081',
    phone: '+91 40 4345 6789',
    email: 'hyd@repmep.com',
  },
];

import { Project } from '@/types';

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    slug: 'adani-data-center-hydration',
    title: 'Adani Data Center - Hydration Wing',
    client: 'Adani Group',
    location: 'Chennai, India',
    category: 'hvac',
    status: 'Completed',
    services: ['HVAC System', 'Fire Fighting'],
    description:
      'Engineering and deployment of high-efficiency precision chilled water plants, hot-aisle containment systems, and double-interlock pre-action sprinkler networks.',
    coverImage: '/assets/images/portfolio/datacenter.jpg',
    imageUrl: '/assets/images/portfolio/datacenter.jpg',
    gallery: [],
    completionYear: 2025,
    scopeOfWork: [
      'Precision cooling system with N+2 redundancy',
      'Hot-aisle containment and active rack airflow management',
      'Double-interlock pre-action fire sprinkler system',
      'BMS integration for dynamic thermal load monitoring',
    ],
    metrics: [
      { label: 'Cooling Capacity', value: '4,500 TR' },
      { label: 'PUE Target', value: '1.25' },
    ],
  },
  {
    id: 'proj-2',
    slug: 'nesco-it-park-phase-4',
    title: 'Nesco IT Park - Phase 4',
    client: 'Nesco Group',
    location: 'Mumbai, India',
    category: 'electrical',
    status: 'Completed',
    services: ['Electrical', 'Substation Installation'],
    description:
      'Turnkey HT/LT electrical substation installation, power distribution networks, busduct structures, and intelligent power monitoring matrices.',
    coverImage: '/assets/images/portfolio/itpark.jpg',
    imageUrl: '/assets/images/portfolio/itpark.jpg',
    gallery: [],
    completionYear: 2024,
    scopeOfWork: [
      '33KV/11KV Substation configuration with 3x2000KVA transformers',
      'Sandwich busduct systems for vertical distribution riser shafts',
      'Harmonic filters and power factor correction capacitors',
      'Smart energy meters integrated with cloud billing',
    ],
    metrics: [
      { label: 'Connected Load', value: '12 MVA' },
      { label: 'Riser Rating', value: '3200A' },
    ],
  },
  {
    id: 'proj-3',
    slug: 'max-healthcare-trauma-centre',
    title: 'Max Healthcare Hub & Trauma Centre',
    client: 'Max Healthcare',
    location: 'New Delhi, India',
    category: 'plumbing',
    status: 'Completed',
    services: ['Plumbing', 'Medical Gas Piping'],
    description:
      'Design and implementation of highly sanitised water filtration setups, medical gas piping networks, dynamic hot-water loops, and advanced sewage treatment solutions.',
    coverImage: '/assets/images/portfolio/hospital.jpg',
    imageUrl: '/assets/images/portfolio/hospital.jpg',
    gallery: [],
    completionYear: 2025,
    scopeOfWork: [
      'Class 1 medical grade gas distribution networks',
      'RO & UV filtration setup for ICU and dialysis blocks',
      'Central solar hot-water system with backup heating loops',
      'Zero-liquid discharge STP with sand and carbon filters',
    ],
    metrics: [
      { label: 'STP Capacity', value: '450 KLD' },
      { label: 'Medical Gas Outlets', value: '350+' },
    ],
  },
  {
    id: 'proj-4',
    slug: 'oracle-corporate-hq',
    title: 'Oracle Corporate Headquarters',
    client: 'Oracle Corp',
    location: 'Bengaluru, India',
    category: 'fitout',
    status: 'Completed',
    services: ['Interior Fitout', 'HVAC Integration'],
    description:
      'Full-scope interior fitout combined with integrated HVAC, electrical grids, and acoustic treatment across 12 floors of corporate office space.',
    coverImage: '/assets/images/portfolio/fitout.jpg',
    imageUrl: '/assets/images/portfolio/fitout.jpg',
    gallery: [],
    completionYear: 2024,
    scopeOfWork: [
      'Modular workspace partitions and premium glass paneling',
      'Bespoke acoustical ceiling panels and fabric paneling',
      'Under-floor air distribution (UFAD) system installation',
      'Intelligent DALI addressable lighting control system',
    ],
    metrics: [
      { label: 'Total Area', value: '250,000 sq.ft' },
      { label: 'Workstations', value: '1,800+' },
    ],
  },
];
