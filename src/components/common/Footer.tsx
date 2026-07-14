'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { NAV_LINKS, SERVICES, SITE_CONFIG } from '@/constants';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#050e1a] text-white select-none">
      {/* Top Footer Section */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 text-left sm:px-6 md:grid-cols-2 md:gap-8 lg:grid-cols-6 lg:px-8">
        {/* Column 1: Company Profile */}
        <div className="space-y-6 lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/rep-logo.webp"
              alt="REP Logo"
              width={40}
              height={35}
              className="h-9 w-auto rounded-lg border border-white/10 bg-white/5 object-contain p-1"
            />
            <span className="font-heading text-xl font-black tracking-tight text-white">
              REP <span className="text-accent">PVT LTD</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-gray-400">
            REP PVT LTD delivers turnkey Fire Fighting, ELV, Plumbing, HVAC, Electrical and FAPA
            engineering solutions across India. ISO 9001:2015 certified.
          </p>
          <div className="flex gap-4">
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full border border-white/5 bg-white/[0.03] p-2.5 text-gray-400 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4A84F] hover:text-[#0B1628]"
              aria-label="Facebook"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full border border-white/5 bg-white/[0.03] p-2.5 text-gray-400 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4A84F] hover:text-[#0B1628]"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href={SITE_CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full border border-white/5 bg-white/[0.03] p-2.5 text-gray-400 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4A84F] hover:text-[#0B1628]"
              aria-label="Twitter / X"
            >
              <TwitterIcon className="size-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full border border-white/5 bg-white/[0.03] p-2.5 text-gray-400 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4A84F] hover:text-[#0B1628]"
              aria-label="Instagram"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold tracking-widest text-[#D4A84F] uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            {NAV_LINKS.filter((l) => l.label !== 'Services').map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative inline-block cursor-pointer py-0.5 transition-colors duration-200 hover:text-white"
                >
                  <span>{link.label}</span>
                  <span className="bg-accent absolute bottom-0 left-0 h-[1px] w-0 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold tracking-widest text-[#D4A84F] uppercase">Services</h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="group relative inline-block cursor-pointer py-0.5 transition-colors duration-200 hover:text-white"
                >
                  <span>{service.title} Works</span>
                  <span className="bg-accent absolute bottom-0 left-0 h-[1px] w-0 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Corporate Office */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold tracking-widest text-[#D4A84F] uppercase">
            Corporate Office
          </h4>
          <ul className="space-y-3.5 text-sm text-gray-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="text-accent mt-0.5 size-4.5 shrink-0" />
              <span>
                {SITE_CONFIG.corporateOffice.street}, {SITE_CONFIG.corporateOffice.city},{' '}
                {SITE_CONFIG.corporateOffice.state} - {SITE_CONFIG.corporateOffice.zip}
              </span>
            </li>
            <li>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, '')}`}
                className="flex cursor-pointer items-center gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="text-accent size-4.5" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="flex cursor-pointer items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="text-accent size-4.5" />
                <span className="break-all">{SITE_CONFIG.contactEmail}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Branch Office */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold tracking-widest text-[#D4A84F] uppercase">
            Branch Office
          </h4>
          <ul className="space-y-3.5 text-sm text-gray-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="text-accent mt-0.5 size-4.5 shrink-0" />
              <span>
                {SITE_CONFIG.branchOffice.street}, {SITE_CONFIG.branchOffice.city},{' '}
                {SITE_CONFIG.branchOffice.state} - {SITE_CONFIG.branchOffice.zip}
              </span>
            </li>
            <li>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, '')}`}
                className="flex cursor-pointer items-center gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="text-accent size-4.5" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE_CONFIG.secondaryEmail}`}
                className="flex cursor-pointer items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="text-accent size-4.5" />
                <span className="break-all">{SITE_CONFIG.secondaryEmail}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-white/5 bg-black/15 py-6 text-left">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-xs text-gray-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} REP PVT LTD. All rights reserved. ISO 9001:2015 Specialist.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="cursor-pointer transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="cursor-pointer transition-colors hover:text-white">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="hover:text-accent flex cursor-pointer items-center gap-1 text-[10px] font-bold tracking-widest uppercase transition-colors focus:outline-none"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
