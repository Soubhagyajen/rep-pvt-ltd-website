import { SERVICES, MOCK_PROJECTS } from '@/constants';
import { Service, Project } from '@/types';

/**
 * Headless CMS connector client.
 * Built to dynamically switch between mock constant files and production CMS integrations.
 */
const CMS_PROVIDER = process.env.NEXT_PUBLIC_CMS_PROVIDER || 'mock';

export async function getServices(): Promise<Service[]> {
  if (CMS_PROVIDER === 'production') {
    // Future implementation: Fetch data from Sanity / Contentful
    // const response = await fetch('https://api.cms.com/v1/services', { headers: { Authorization: `Bearer ${process.env.CMS_API_KEY}` } });
    // return response.json();
    throw new Error('Production CMS Client not implemented yet.');
  }

  // Default / Mock fallbacks
  return Promise.resolve(SERVICES);
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const services = await getServices();
  return services.find((s) => s.slug === slug || s.id === slug);
}

export async function getProjects(): Promise<Project[]> {
  if (CMS_PROVIDER === 'production') {
    // Future implementation: Fetch projects from Sanity / Contentful
    throw new Error('Production CMS Client not implemented yet.');
  }

  return Promise.resolve(MOCK_PROJECTS);
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((p) => p.id === id);
}

export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  const projects = await getProjects();
  return projects.slice(0, limit);
}
