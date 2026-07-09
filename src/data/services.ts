import { Service } from '@/types';

export const SERVICES_HEADER = {
  label: 'Our Expertise',
  title: 'MEP Engineering Under One Roof',
  description:
    'From complex power grids to centralized climate systems, we engineer resilient infrastructure that scales for tomorrow.',
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'electrical',
    title: 'Electrical Works',
    icon: 'Zap',
    imageUrl: '/images/services/electrical.png',
    shortDescription:
      'High-tension & low-tension power distribution, substations, panels, and backup grids.',
    description:
      'We design and commission heavy-duty electrical networks, from incoming HT substation lines and high-capacity transformers to distribution LT panels, riser busducts, and earthing grids.',
    features: [
      'HT Substation & Transformer installations',
      'HT/LT Distribution Panels & Cable trays',
      'DG Synchronizing Backup Power grids',
      'Industrial Lighting & Earthing frameworks',
    ],
    metrics: [
      { value: '12 MVA', label: 'Connected Load Max' },
      { value: '3x2000KVA', label: 'Transformer Max' },
    ],
  },
  {
    id: 'hvac',
    title: 'HVAC Solutions',
    icon: 'Wind',
    imageUrl: '/images/services/hvac.png',
    shortDescription:
      'Centralized chilled water plants, VRF, ventilation, and data center cooling.',
    description:
      'Our mechanical air systems prioritize climate control, energy-efficiency metrics, and Indoor Air Quality (IAQ) profiles across corporate parks, data centers, and industrial facilities.',
    features: [
      'Chiller Plant & VRF system configurations',
      'Smoke extraction & exhaust ventilation grids',
      'Clean Room HVAC & air handling units',
      'Intelligent Building Management (BMS) controls',
    ],
    metrics: [
      { value: '4,500 TR', label: 'Project Capacity' },
      { value: '1.25 PUE', label: 'Data Center Target' },
    ],
  },
  {
    id: 'plumbing',
    title: 'Plumbing & PHE',
    icon: 'Droplet',
    imageUrl: '/images/services/plumbing.png',
    shortDescription:
      'Water treatment setups, sewage treatment plants, domestic lines, and drainage loops.',
    description:
      'Sustainable public health engineering. We deploy high-efficiency water supply networks, sand/carbon filtration treatment plants (STP/WTP), and heavy industrial storm drainage systems.',
    features: [
      'Hydro-pneumatic domestic water distribution',
      'Sewage Treatment & Effluent Treatment plants',
      'Rainwater harvesting and storage grids',
      'High-pressure soil, waste & vent piping loops',
    ],
    metrics: [
      { value: '450 KLD', label: 'STP Capacity Max' },
      { value: 'ZLD', label: 'Zero Liquid Discharge' },
    ],
  },
  {
    id: 'fire-fighting',
    title: 'Fire Protection',
    icon: 'Flame',
    imageUrl: '/images/services/fire-fighting.png',
    shortDescription:
      'Certified sprinkler systems, wet-risers, gas suppression, and life safety networks.',
    description:
      'Complete life safety fire protection systems. Engineered to international standards (NFPA, NBC), ensuring early detection, containment, and rapid suppression of fire hazards.',
    features: [
      'Automatic Sprinkler & Wet-Riser Hydrants',
      'Gas Suppression (FM200 / Novec 1230)',
      'High-capacity Fire Pump installations',
      'NFPA-compliant safety audits & compliance',
    ],
    metrics: [
      { value: 'Class A', label: 'NBC Compliance' },
      { value: '0', label: 'Incident Safety Record' },
    ],
  },
  {
    id: 'elv-works',
    title: 'ELV Systems',
    icon: 'Cpu',
    imageUrl: '/images/services/elv.png',
    shortDescription: 'IP CCTV surveillance, biometric access, structured cabling, and IT hubs.',
    description:
      'Extra-low voltage system integrations that serve as the technological spine of modern structures, including surveillance, structured cabling, and smart automation systems.',
    features: [
      'Structured Cat6A LAN & Fiber backbone cabling',
      'IP Surveillance & biometric Access Control',
      'Intelligent Audio-Visual board room automation',
      'Public Address & paging system frameworks',
    ],
    metrics: [
      { value: '10G', label: 'Fiber Core Backbone' },
      { value: '1,800+', label: 'Node Network Capacity' },
    ],
  },
  {
    id: 'fapa',
    title: 'FAPA Networks',
    icon: 'Activity',
    imageUrl: '/images/services/fapa.png',
    shortDescription:
      'Addressable fire alarms, smoke detection, and emergency warning voice grids.',
    description:
      'State-of-the-art Fire Alarm and Public Address (FAPA) solutions designed to facilitate rapid evacuation, automated detection alerts, and centralized life safety command.',
    features: [
      'Addressable Fire Alarm panels & loops',
      'Emergency Voice Evacuation integrations',
      'HVAC smoke damper control integration',
      'Intelligent smoke & heat detection grids',
    ],
    metrics: [
      { value: 'EN54', label: 'Certified Loops' },
      { value: '< 2s', label: 'Alarm Trigger Time' },
    ],
  },
];
