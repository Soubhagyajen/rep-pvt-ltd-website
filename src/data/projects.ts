import { Project } from '@/types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'lodha-bellezza',
    slug: 'lodha-bellezza-mep-services',
    title: 'Lodha Bellezza MEP Services',
    client: 'Lodha',
    location: 'Kukatpally, Hyderabad, Telangana',
    category: 'Residential',
    services: ['Electrical', 'Plumbing & PHE', 'Fire Fighting'],
    status: 'Completed',
    completionYear: 2023,
    coverImage: '/images/projects/lodha.png',
    heroImage: '/images/projects/lodha.png',
    description:
      'Turnkey electrical systems distribution, public health engineering (PHE), and certified firefighting installation for premium luxury residential towers.',
    overview:
      'Complete MEP, plumbing, and safety infrastructure implementation for Lodha Bellezza, a premium luxury residential development in Hyderabad. The project required high-voltage substation setup, vertical riser busducts, advanced hydro-pneumatic water distribution, and NFPA-compliant firefighting loops across multiple high-rise towers.',
    scopeOfWork: [
      'Installation of high-voltage outdoor substations and heavy transformers.',
      'Sandwich busduct systems for vertical distribution riser shafts.',
      'Hydro-pneumatic domestic water distribution for uniform multi-level pressure.',
      'NFPA-compliant residential sprinkler networks and dry-risers.',
    ],
    servicesProvided: [
      'High-Tension & Low-Tension Electrical distribution.',
      'Turnkey Plumbing & Public Health Engineering.',
      'Automatic sprinkler and wet-riser hydrant systems.',
    ],
    challenges:
      'Designing water supply networks capable of managing vertical pressure variations across 30+ floors without increasing risk of piping wear.',
    solutions:
      'Configured a multi-zone hydro-pneumatic pumping layout using pressure reducing valves (PRVs) to maintain uniform pressure across all residential levels.',
    gallery: ['/images/services/plumbing.png', '/images/services/fire-fighting.png'],
    stats: [
      { label: 'Connected Load', value: '6.5 MVA' },
      { label: 'Pressure Zones', value: '4 Zones' },
      { label: 'Towers Completed', value: '4 Towers' },
    ],
  },
  {
    id: 'my-home-bhuvi',
    slug: 'my-home-bhuvi-highrise',
    title: 'My Home Bhuvi Highrise',
    client: 'My Home Group',
    location: 'Hyderabad, Telangana',
    category: 'Residential',
    services: ['HVAC', 'Electrical', 'Plumbing & PHE'],
    status: 'Completed',
    completionYear: 2024,
    coverImage: '/images/projects/my-home.png',
    heroImage: '/images/projects/my-home.png',
    description:
      'Turnkey public health engineering, water management networks, and fire safety systems across a multi-tower premium highrise residential township.',
    overview:
      'Turnkey MEP engineering, water management, and HVAC integration for My Home Bhuvi, a high-density, premium residential community. The project includes an integrated central chilled water loop, advanced STP system, and intelligent electrical grid monitoring.',
    scopeOfWork: [
      'Hydro-pneumatic domestic water distribution for reliable pressure.',
      'Implementation of a high-capacity sewage treatment plant (STP).',
      'Integration of high-load HVAC chillers with automatic zone control.',
      'DALI-compliant addressable lighting controls across towers.',
    ],
    servicesProvided: [
      'Turnkey Plumbing & Public Health Engineering.',
      'Centralized chilled water plant HVAC architecture.',
      'HT & LT Panels and Cable routing.',
    ],
    challenges:
      'Integrating high-load vertical riser shafts within constrained interior core dimensions without violating structural safety tolerances.',
    solutions:
      'Developed virtual 3D path models to optimize utility spaces, reducing core layout footprints by 15% while matching high-voltage guidelines.',
    gallery: ['/images/services/electrical.png', '/images/services/plumbing.png'],
    stats: [
      { label: 'STP Capacity', value: '600 KLD' },
      { label: 'HVAC Capacity', value: '1,800 TR' },
      { label: 'Apartments Served', value: '1,200 Units' },
    ],
  },
  {
    id: 'aparna-sarovar-grande',
    slug: 'aparna-sarovar-grande-electrical',
    title: 'Aparna Sarovar Grande',
    client: 'Aparna',
    location: 'Nallagandla, Hyderabad, Telangana',
    category: 'Residential',
    services: ['Electrical', 'Fire Fighting', 'FAPA'],
    status: 'Completed',
    completionYear: 2023,
    coverImage: '/images/projects/aparna.png',
    heroImage: '/images/projects/aparna.png',
    description:
      'Complete electrical distribution, addressable fire alarm, and high-velocity hydrant networks for a premium residential complex.',
    overview:
      'Deployment of state-of-the-art power distribution and life-safety systems for Aparna Sarovar Grande. Features a robust backup grid using heavy diesel generator sets, automatic transfer switches, and structured addressable smoke detection zones.',
    scopeOfWork: [
      'Installation of DG Sets and UPS Backup systems.',
      'Addressable Fire Alarm and Smoke Detection grids.',
      'Lightning protection and earthing grids.',
      'High-velocity spray suppression systems protecting critical utility areas.',
    ],
    servicesProvided: [
      'HT Substation & Power distribution engineering.',
      'Evacuation FAPA & life-safety planning.',
      'Lightning protection and earthing grids.',
    ],
    challenges:
      'Achieving zero-downtime transition for backup power generators in critical fire safety situations.',
    solutions:
      'Implemented high-speed Automatic Transfer Switches (ATS) coupled with centralized synchronization panels to restore full service within 6 seconds.',
    gallery: ['/images/services/fire-fighting.png', '/images/services/fapa.png'],
    stats: [
      { label: 'Backup Power', value: '4,000 kVA' },
      { label: 'Fire Detectors', value: '1,800 Nodes' },
      { label: 'Switchover Time', value: '6 seconds' },
    ],
  },
  {
    id: 'signature-horizon',
    slug: 'signature-horizon-fitout',
    title: 'Signature Horizon Fitout',
    client: 'Signature Avenues',
    location: 'Gachibowli, Hyderabad, Telangana',
    category: 'Residential',
    services: ['Interior Fitout', 'Electrical', 'ELV'],
    status: 'Completed',
    completionYear: 2024,
    coverImage: '/images/projects/signature.png',
    heroImage: '/images/projects/signature.png',
    description:
      'Premium turnkey interior fitout and electrical engineering integration for corporate common areas and residential clubhouses.',
    overview:
      'Full-scope interior fitout combined with integrated HVAC, electrical grids, and acoustic treatment for the central clubhouse and business centers at Signature Horizon. Designed to meet high-end modern minimalist specifications.',
    scopeOfWork: [
      'Modular workspace partitions and premium glass paneling.',
      'Bespoke acoustical ceiling panels and fabric paneling.',
      'Internal & External Lighting Systems.',
      'IP CCTV Surveillance and Access Control matrices.',
    ],
    servicesProvided: [
      'Premium turnkey interior civil & fitout execution.',
      'Structured cabling and LAN/WiFi architecture.',
      'Internal & External Lighting Systems.',
    ],
    challenges:
      'Integrating complex cabling infrastructure behind minimalist, clean architectural wood paneling and exposed concrete columns.',
    solutions:
      'Utilized custom micro-duct routing and false flooring to run ELV and electrical lines seamlessly without disturbing raw finishes.',
    gallery: ['/images/services/electrical.png'],
    stats: [
      { label: 'Fitout Area', value: '45,000 sq.ft' },
      { label: 'CCTV Channels', value: '120 Channels' },
      { label: 'Acoustic Rating', value: '< NC-30' },
    ],
  },
  {
    id: 'supadha-shunya',
    slug: 'supadha-shunya-bms',
    title: 'Supadha Shunya BMS & HVAC',
    client: 'Supadha',
    location: 'Hyderabad, Telangana',
    category: 'Commercial',
    services: ['HVAC', 'BMS & Automation'],
    status: 'In Progress',
    completionYear: 2026,
    coverImage: '/images/projects/supadha.png',
    heroImage: '/images/projects/supadha.png',
    description:
      'Smart building management systems (BMS) and high-efficiency HVAC chillers for an eco-friendly commercial workspace.',
    overview:
      'Deployment of high-efficiency climate controls and micro-controller based automated Building Management Systems (BMS) for the Supadha Shunya commercial development. Implements carbon monitoring ventilation loops to target green building certifications.',
    scopeOfWork: [
      'Chiller Plant and VRF system configurations.',
      'Building Management System (BMS) integration.',
      'Energy efficient VRF systems linked with carbon dioxide sensors.',
      'Air Handling Units (AHU) & duct routing layout.',
    ],
    servicesProvided: [
      'Clean Room HVAC & Air Filtration.',
      'Building Management System (BMS) integration.',
      'Carbon-monitoring HVAC systems.',
    ],
    challenges:
      'Achieving absolute compliance with high green building standards (GRIHA 4-Star) for heavy energy consumption zones.',
    solutions:
      'Integrated occupancy sensor grids to cut airflows and lighting load matrices when zones are empty, saving 30% on base utility loads.',
    gallery: ['/images/services/elv.png'],
    stats: [
      { label: 'Energy Target', value: 'GRIHA 4-Star' },
      { label: 'HVAC Flow Rate', value: '80,000 CFM' },
      { label: 'Sensors Online', value: '340 Nodes' },
    ],
  },
  {
    id: 'jv-heights',
    slug: 'jv-heights-commercial',
    title: 'JV Heights Commercial MEP',
    client: 'JV Ventures',
    location: 'Kondapur, Hyderabad, Telangana',
    category: 'Commercial',
    services: ['HVAC', 'ELV', 'Interior Fitout'],
    status: 'Completed',
    completionYear: 2024,
    coverImage: '/images/projects/jv-ventures.png',
    heroImage: '/images/projects/jv-ventures.png',
    description:
      'Premium interior fitout combined with low-noise HVAC ducting and smart security access control networks.',
    overview:
      'Turnkey interior fitout and mechanical services for JV Heights, an A-grade commercial office tower. Includes dynamic cooling distribution, acoustic drywall partitions, biometric access control, and complete interior finishes.',
    scopeOfWork: [
      'Drywall partitions, glass glazing, and false ceilings.',
      'Acoustic wall paneling and sound attenuation.',
      'Precision air conditioning for server rooms.',
      'Structured cabling and LAN/WiFi architecture.',
    ],
    servicesProvided: [
      'Premium turnkey interior civil & fitout execution.',
      'High-density Structured Cabling & ELV.',
      'Precision air conditioning configurations.',
    ],
    challenges:
      'Eliminating audible HVAC duct vibration and airflow noise in boardroom spaces directly below the main mechanical plant.',
    solutions:
      'Installed double-walled acoustic silencers and vibration-isolation mounts on all air handling units to meet strict low-noise indices.',
    gallery: ['/images/services/hvac.png'],
    stats: [
      { label: 'Total Floors', value: '8 Floors' },
      { label: 'Acoustic Index', value: 'NC-25' },
      { label: 'Data Nodes', value: '850 Points' },
    ],
  },
  {
    id: 'stanley-medical-college-hospital',
    slug: 'stanley-medical-college-hospital-phe',
    title: 'Stanley Medical College Hospital PHE',
    client: 'Stanley Medical College',
    location: 'Chennai, Tamil Nadu',
    category: 'Healthcare',
    services: ['Plumbing & PHE', 'Fire Fighting', 'ELV'],
    status: 'Completed',
    completionYear: 2023,
    coverImage: '/images/projects/stanley.png',
    heroImage: '/images/projects/stanley.png',
    description:
      'Public health engineering, certified clean-room plumbing, and addressable FAPA fire protection networks for the hospital wings.',
    overview:
      'MEP and PHE works for the new super specialty wing of Stanley Medical College. Highly specialized installation including RO water purification plants, medical gas warning alarms, and positive pressure clean room HEPA air ventilation.',
    scopeOfWork: [
      'RO & UV filtration setup for ICU and dialysis blocks.',
      'Soil, Waste, and Vent piping systems.',
      'Addressable Fire Alarm and Smoke Detection grids.',
      'Integrated rainwater harvesting and reuse networks.',
    ],
    servicesProvided: [
      'Turnkey Plumbing & Public Health Engineering.',
      'Evacuation FAPA & life-safety planning.',
      'Sanitary PHE and zero-liquid discharge STP.',
    ],
    challenges:
      'Designing dynamic clean room airflow cycles to keep positive pressure gradients in active surgeries, eliminating pathogen contamination risks.',
    solutions:
      'Integrated custom dynamic VAV (Variable Air Volume) dampers linked to pressure gauges, maintaining exact pressure zones automatically.',
    gallery: ['/images/services/fire-fighting.png', '/images/services/elv.png'],
    stats: [
      { label: 'Bed Capacity', value: '500 Beds' },
      { label: 'HEPA Efficiency', value: '99.97%' },
      { label: 'RO Plant Flow', value: '50 KLD' },
    ],
  },
  {
    id: 'tb-industrial-plant',
    slug: 'tb-industrial-plant-mep',
    title: 'TB Industrial Plant MEP',
    client: 'TB',
    location: 'Cuttack, Odisha',
    category: 'Industrial',
    services: ['Electrical', 'HVAC', 'Plumbing & PHE'],
    status: 'Completed',
    completionYear: 2022,
    coverImage: '/images/projects/tb.png',
    heroImage: '/images/projects/tb.png',
    description:
      'Large-scale industrial engineering featuring high-voltage electrical substations, process cooling loops, and heavy exhaust ventilation.',
    overview:
      'MEP design and turnkey execution for the heavy industrial manufacturing facility of TB. Handled high-power sub-panels, process cooling pipelines for heavy machinery, emergency exhaust ventilation systems, and hazard-certified fire suppression hydrants.',
    scopeOfWork: [
      'Substation and Transformer installation.',
      'HT & LT Panels and Cable routing.',
      'Mechanical ventilation & smoke extraction systems.',
      'Process cooling loops and piping configurations.',
    ],
    servicesProvided: [
      'HT Substation & Power distribution engineering.',
      'HVAC Ventilation & Process cooling loops.',
      'Turnkey Plumbing & Public Health Engineering.',
    ],
    challenges:
      'Managing extreme ambient heat and hazardous fumes inside turbine assembly halls during production peaks.',
    solutions:
      'Designed high-volume exhaust stacks paired with intelligent heat-recovery ventilation (HRV) units, reducing cooling power draw by 22%.',
    gallery: [
      '/images/services/electrical.png',
      '/images/services/hvac.png',
      '/images/services/plumbing.png',
    ],
    stats: [
      { label: 'Substation Load', value: '15 MVA' },
      { label: 'Air Flow Rate', value: '120,000 CFM' },
      { label: 'Exhaust Stacks', value: '8 Units' },
    ],
  },
];
