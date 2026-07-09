'use client';

import * as React from 'react';
import { motion as motionBase, AnimatePresence as AnimatePresenceBase } from 'framer-motion';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { SITE_CONFIG } from '@/constants';

export function FloatingContact() {
  const [isOpen, setIsOpen] = React.useState(false);
  const widgetRef = React.useRef<HTMLDivElement>(null);

  // Close widget when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const whatsappMessage = encodeURIComponent(
    'Hello REP PVT LTD, I found your website and would like to discuss my project.',
  );
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${whatsappMessage}`;
  const phoneUrl = `tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, '')}`;
  const emailUrl = `mailto:${SITE_CONFIG.contactEmail}`;

  return (
    <div
      ref={widgetRef}
      className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3 select-none"
    >
      {/* Expandable Menu Actions */}
      <AnimatePresenceBase>
        {isOpen && (
          <motionBase.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-1 flex flex-col items-end gap-3"
          >
            {/* Phone Action */}
            <a
              href={phoneUrl}
              className="group flex cursor-pointer items-center gap-2.5"
              title="Call Us"
            >
              <span className="rounded-md border border-white/5 bg-slate-900/85 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase opacity-0 shadow-sm transition-opacity duration-200 select-none group-hover:opacity-100 dark:bg-slate-800/90">
                Call Phone
              </span>
              <div className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-[#0B2342] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-transparent hover:bg-[#D4A84F] hover:text-[#0B1628] active:scale-95">
                <Phone className="size-5" />
              </div>
            </a>

            {/* Email Action */}
            <a
              href={emailUrl}
              className="group flex cursor-pointer items-center gap-2.5"
              title="Email Us"
            >
              <span className="rounded-md border border-white/5 bg-slate-900/85 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase opacity-0 shadow-sm transition-opacity duration-200 select-none group-hover:opacity-100 dark:bg-slate-800/90">
                Send Email
              </span>
              <div className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-[#0B2342] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-transparent hover:bg-[#D4A84F] hover:text-[#0B1628] active:scale-95">
                <Mail className="size-5" />
              </div>
            </a>

            {/* Direct WhatsApp Message Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center gap-2.5"
              title="WhatsApp Chat"
            >
              <span className="rounded-md border border-white/5 bg-slate-900/85 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase opacity-0 shadow-sm transition-opacity duration-200 select-none group-hover:opacity-100 dark:bg-slate-800/90">
                WhatsApp Chat
              </span>
              <div className="flex size-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1ebd59] active:scale-95">
                <MessageCircle className="size-6" />
              </div>
            </a>
          </motionBase.div>
        )}
      </AnimatePresenceBase>

      {/* Main Toggle FAB */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex size-14 cursor-pointer items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-[#D4A84F]/50 focus:outline-none active:scale-95 ${
          isOpen
            ? 'border border-[#D4A84F]/20 bg-[#0B2342] text-[#D4A84F]'
            : 'bg-[#25D366] text-white hover:bg-[#1ebd59]'
        }`}
        aria-label="Toggle contact widget"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="animate-in spin-in-90 size-6 duration-300" />
        ) : (
          <div className="relative">
            <MessageCircle className="size-7" />
            {/* Pulsing indicator */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full border border-white bg-red-500 dark:border-[#25D366]"></span>
            </span>
          </div>
        )}
      </button>
    </div>
  );
}
