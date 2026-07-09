export interface ServiceMetric {
  label: string;
  value: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  imageUrl?: string;
  shortDescription: string;
  description: string;
  features: string[];
  slug?: string;
  metrics?: ServiceMetric[];
}
