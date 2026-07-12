/**
 * Trusted Clients Data
 *
 * TODO: Replace this client showcase with actual Featured Projects once
 * project images and details are provided by the client.
 */

export interface Client {
  id: string;
  name: string;
  /** Path to client logo image */
  logo: string;
}

export const CLIENTS_HEADER = {
  label: 'Our Clients',
  title: 'Trusted by Leading Organizations',
  description:
    'REP PVT LTD has successfully delivered MEP engineering solutions for residential, commercial, healthcare and industrial clients across India.',
};

export const CLIENTS_DATA: Client[] = [
  {
    id: 'lodha',
    name: 'Lodha',
    logo: '/images/clients/lodha.webp',
  },
  {
    id: 'tb',
    name: 'TB',
    logo: '/images/clients/tb.webp',
  },
  {
    id: 'jv-ventures',
    name: 'JV Ventures',
    logo: '/images/clients/jv-ventures.webp',
  },
  {
    id: 'my-home-group',
    name: 'My Home Group',
    logo: '/images/clients/my-home-group.webp',
  },
  {
    id: 'aparna',
    name: 'Aparna',
    logo: '/images/clients/aparna.webp',
  },
  {
    id: 'signature-avenues',
    name: 'Signature Avenues',
    logo: '/images/clients/signature-avenues.webp',
  },
  {
    id: 'supadha',
    name: 'Supadha',
    logo: '/images/clients/supadha.webp',
  },
  {
    id: 'stanley-medical-college',
    name: 'Stanley Medical College',
    logo: '/images/clients/stanley-medical-college.webp',
  },
];
