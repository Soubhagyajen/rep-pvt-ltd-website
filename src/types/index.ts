/**
 * Core Type Definitions for REP Pvt Ltd
 */

export * from './service';
export * from './project';

export interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
  email: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface CompanyStat {
  value: string;
  label: string;
}

export interface Certification {
  name: string;
  authority: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceInterest: string;
  message: string;
}
