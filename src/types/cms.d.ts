export namespace CMS {
  export interface Asset {
    _ref: string;
    _type: 'reference';
  }

  export interface Image {
    _type: 'image';
    asset: Asset;
    alt?: string;
  }

  // Schema matches for Headless CMS collections
  export interface ServiceDocument {
    _id: string;
    _type: 'service';
    title: string;
    slug: { current: string };
    shortDescription: string;
    description: string;
    iconName: string;
    features: string[];
    order: number;
  }

  export interface ProjectDocument {
    _id: string;
    _type: 'project';
    title: string;
    slug: { current: string };
    client: string;
    location: string;
    serviceCategory: { _ref: string; _type: 'reference' };
    description: string;
    mainImage: Image;
    completionYear: number;
    scopeOfWork: string[];
    keyMetricLabel?: string;
    keyMetricValue?: string;
    featured: boolean;
  }
}
