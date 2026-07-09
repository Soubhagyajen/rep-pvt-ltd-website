import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { SITE_CONFIG } from '@/constants';

export const metadata: Metadata = {
  title: 'Contact Our Team',
  description:
    'Reach out to Routray Electro Mechanical Projects Pvt. Ltd. (REP PVT LTD) to coordinate quotes, project bids, office visits, or site assessments.',
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground min-h-screen pb-24 transition-colors duration-300">
      <PageHeader
        title="Contact Our Team"
        breadcrumbs={[{ label: 'Contact' }]}
        description="Connect with our certified MEP engineers and project coordinators. We serve commercial, industrial, healthcare, and residential developments across India."
      />

      <div className="animate-in fade-in slide-in-from-bottom-5 mx-auto mt-16 w-full max-w-7xl px-4 delay-150 duration-700 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Contact Cards */}
          <div className="space-y-6 lg:col-span-5">
            <h3 className="font-heading border-accent text-foreground border-l-2 pl-4 text-lg font-bold tracking-wider uppercase sm:text-xl">
              Office Locations
            </h3>

            <div className="space-y-6">
              {/* Head Office (Corporate HQ) Card with Embedded Map */}
              <div className="bg-card border-border space-y-5 rounded-2xl border p-5 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <span className="bg-accent/15 border-accent/20 text-accent flex size-7 items-center justify-center rounded-lg border">
                    <MapPin className="size-4" />
                  </span>
                  <h4 className="font-heading text-foreground text-sm font-bold tracking-wide uppercase">
                    Head Office (Corporate HQ)
                  </h4>
                </div>

                {/* Google Map Container with Zoom Micro Animation */}
                <div className="border-border group/map relative h-64 w-full overflow-hidden rounded-xl border">
                  <iframe
                    title="REP PVT LTD Head Office Location"
                    src="https://maps.google.com/maps?q=MCH%20393,%20MIG-1,%20Ground%20Floor,%20KPHB%20Colony,%20Phase-1,%20Kukatpally,%20Hyderabad,%20Telangana%20-%20500072&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="h-full w-full border-0 transition-transform duration-700 ease-out group-hover/map:scale-105"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                    {SITE_CONFIG.corporateOffice.street}, {SITE_CONFIG.corporateOffice.city},{' '}
                    {SITE_CONFIG.corporateOffice.state} - {SITE_CONFIG.corporateOffice.zip}
                  </p>

                  {/* Directions Button */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.corporateOffice.street + ', ' + SITE_CONFIG.corporateOffice.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-1 inline-flex cursor-pointer items-center gap-2 text-xs font-bold text-[#D4A84F] transition-colors duration-200 select-none hover:text-[#0B2342] dark:hover:text-white"
                  >
                    <span>Get Directions</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                {/* Divider */}
                <div className="bg-border h-[1px] w-full" />

                <div className="text-muted-foreground space-y-2.5 text-xs">
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, '')}`}
                    className="hover:text-accent flex cursor-pointer items-center gap-2.5 transition-colors"
                  >
                    <Phone className="text-accent size-3.5" />
                    <span>{SITE_CONFIG.phone}</span>
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    className="hover:text-accent flex cursor-pointer items-center gap-2.5 transition-colors"
                  >
                    <Mail className="text-accent size-3.5" />
                    <span>{SITE_CONFIG.contactEmail}</span>
                  </a>
                  <div className="flex items-center gap-2.5">
                    <Clock className="text-accent size-3.5" />
                    <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Branch Office Card */}
              <div className="bg-card border-border space-y-4 rounded-2xl border p-5 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <span className="bg-accent/15 border-accent/20 text-accent flex size-7 items-center justify-center rounded-lg border">
                    <MapPin className="size-4" />
                  </span>
                  <h4 className="font-heading text-foreground text-sm font-bold tracking-wide uppercase">
                    Branch Office
                  </h4>
                </div>
                <p className="text-muted-foreground pl-1.5 text-xs leading-relaxed sm:text-sm">
                  {SITE_CONFIG.branchOffice.street}, {SITE_CONFIG.branchOffice.city},{' '}
                  {SITE_CONFIG.branchOffice.state} - {SITE_CONFIG.branchOffice.zip}
                </p>

                {/* Divider */}
                <div className="bg-border h-[1px] w-full" />

                <div className="text-muted-foreground space-y-2.5 pl-1.5 text-xs">
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, '')}`}
                    className="hover:text-accent flex cursor-pointer items-center gap-2.5 transition-colors"
                  >
                    <Phone className="text-accent size-3.5" />
                    <span>{SITE_CONFIG.phone}</span>
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.secondaryEmail}`}
                    className="hover:text-accent flex cursor-pointer items-center gap-2.5 transition-colors"
                  >
                    <Mail className="text-accent size-3.5" />
                    <span>{SITE_CONFIG.secondaryEmail}</span>
                  </a>
                  <div className="flex items-center gap-2.5">
                    <Clock className="text-accent size-3.5" />
                    <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick trust cues */}
            <div className="bg-accent/5 border-accent/10 flex gap-4 rounded-2xl border p-5">
              <ShieldCheck className="text-accent mt-0.5 size-8 shrink-0" />
              <div className="space-y-1">
                <h4 className="font-heading text-xs font-bold tracking-wider text-white uppercase">
                  ISO 9001:2015 Standards
                </h4>
                <p className="text-xs leading-relaxed text-gray-400">
                  All site visits, assessments, design modeling, and material procurements conform
                  strictly to ISO-compliant processes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
