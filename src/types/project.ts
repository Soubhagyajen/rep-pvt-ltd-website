export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  location: string;
  category: string;
  services: string[];
  status: 'Completed' | 'In Progress';
  description: string;
  coverImage: string;
  gallery: string[];
  completionYear?: string | number;
  heroImage?: string;
  imageUrl?: string;
  overview?: string;
  scopeOfWork: string[];
  servicesProvided?: string[];
  challenges?: string;
  solutions?: string;
  stats?: ProjectStat[];
  metrics?: ProjectMetric[];
}
