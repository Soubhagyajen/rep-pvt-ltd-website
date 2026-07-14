'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchOverlay } from './SearchOverlay';
import {
  Search,
  ChevronDown,
  X,
  Menu,
  Award,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Zap,
  Wind,
  Flame,
  Droplet,
  Cpu,
  Activity,
  Layout,
  Sun,
  Moon,
} from 'lucide-react';

import { useScroll } from '@/hooks/useScroll';
import { NAV_LINKS, SERVICES, SITE_CONFIG } from '@/constants';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { useTheme } from 'next-themes';

// Service icon helper referencing custom Lucide icons
function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    Zap,
    Wind,
    Flame,
    Droplet,
    Cpu,
    Activity,
    Layout,
  };
  const IconComponent = icons[name] || Zap;
  return <IconComponent className={className} />;
}

export function Navbar() {
  const pathname = usePathname();
  const { scrolled } = useScroll(10);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Close menus on path transition
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
    setMobileServicesOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Keyboard accessibility triggers
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesMenuOpen(false);
        setMobileMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isHomePage = pathname === '/';
  // Transparent style initially, locked solid on scroll
  const isTransparent = isHomePage && !scrolled && !mobileMenuOpen;

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 w-full transition-transform duration-300 ease-in-out',
        scrolled ? '-translate-y-10' : 'translate-y-0',
      )}
    >
      {/* 1. TOP ANNOUNCEMENT BAR (Height 40px) */}
      <div className="bg-primary px-space-24 hidden h-10 w-full items-center justify-between border-b border-white/5 text-[11px] font-medium text-white select-none md:flex">
        <div className="gap-space-8 flex items-center">
          <Icon icon={Award} size={16} className="text-accent" />
          <span className="tracking-wide text-white/95 uppercase">
            ISO 9001:2015 Certified Specialist
          </span>
        </div>
        <div className="gap-space-24 flex items-center">
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, '')}`}
            className="gap-space-6 hover:text-accent flex items-center text-white/85 transition-colors duration-200"
          >
            <Icon icon={Phone} size={16} className="text-accent" />
            <span>{SITE_CONFIG.phone}</span>
          </a>
          <a
            href={`mailto:${SITE_CONFIG.contactEmail}`}
            className="gap-space-6 hover:text-accent hidden items-center text-white/85 transition-colors duration-200 sm:flex"
          >
            <Icon icon={Mail} size={16} className="text-accent" />
            <span>{SITE_CONFIG.contactEmail}</span>
          </a>
          <div className="gap-space-6 hidden items-center text-white/80 lg:flex">
            <Icon icon={Clock} size={16} className="text-accent" />
            <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR (Height 64px on mobile, 80px on desktop) */}
      <nav
        className={cn(
          'px-space-24 flex h-16 w-full items-center justify-between border-b transition-all duration-300 md:h-20',
          isTransparent
            ? 'border-white/10 bg-transparent text-white'
            : 'border-border/40 text-foreground bg-white/90 shadow-md backdrop-blur-md dark:bg-[#0B1F3A]/90',
        )}
        aria-label="Main navigation"
      >
        {/* Logo Section */}
        <Link
          href="/"
          className="group gap-space-12 p-space-4 focus-visible:ring-accent flex items-center rounded-lg focus-visible:ring-2 focus-visible:outline-none"
          prefetch={false}
        >
          <div
            className={cn(
              'flex shrink-0 items-center justify-center rounded-[10px] border p-[4px] shadow-sm transition-all duration-300',
              isTransparent
                ? 'border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)]'
                : 'border-[rgba(255,255,255,0.08)] bg-[#0B1F3A] dark:bg-[rgba(255,255,255,0.04)]',
            )}
          >
            <Image
              src="/images/logo/rep-logo.webp"
              alt="REP Pvt Ltd Logo"
              width={1024}
              height={898}
              className="h-[33px] w-auto shrink-0 object-contain transition-transform duration-300 hover:scale-105 md:h-[40px] lg:h-[48px]"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                'font-heading text-xl leading-none font-black tracking-tight transition-colors duration-300',
                isTransparent ? 'text-white' : 'text-[#0B1F3A] dark:text-white',
              )}
            >
              REP <span className="text-accent">PVT LTD</span>
            </span>
            <span
              className={cn(
                'mt-space-4 hidden text-[9px] font-bold tracking-widest uppercase transition-colors duration-300 sm:inline-block',
                isTransparent ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400',
              )}
            >
              Engineering Excellence Under One Roof
            </span>
          </div>
        </Link>

        {/* Desktop Menu Link Options */}
        <div className="gap-space-32 hidden items-center md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            if (link.label === 'Services') {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesMenuOpen(true)}
                  onMouseLeave={() => setServicesMenuOpen(false)}
                >
                  <button
                    className={cn(
                      'font-heading gap-space-4 py-space-16 focus-visible:text-accent flex items-center text-xs font-bold tracking-widest uppercase transition-colors focus-visible:outline-none',
                      isTransparent
                        ? 'hover:text-accent text-white/90'
                        : 'text-foreground hover:text-primary',
                      servicesMenuOpen && 'text-accent',
                    )}
                    aria-haspopup="true"
                    aria-expanded={servicesMenuOpen}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        'size-3.5 transition-transform duration-300',
                        servicesMenuOpen && 'text-accent rotate-180',
                      )}
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {servicesMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.25, ease: [0.83, 0, 0.17, 1] }}
                        className="border-border/60 rounded-card p-space-32 gap-space-24 absolute top-full left-1/2 z-50 mt-0 grid w-screen max-w-5xl -translate-x-1/2 grid-cols-4 border bg-white shadow-xl dark:bg-[#0B1F3A]"
                      >
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services#${service.id}`}
                            className="group p-space-16 hover:border-border/30 flex flex-col justify-between rounded-lg border border-transparent transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/5"
                            prefetch={false}
                          >
                            <div>
                              <div className="gap-space-12 mb-space-12 flex items-center">
                                <span className="rounded-btn bg-secondary text-primary group-hover:bg-primary group-hover:text-accent dark:group-hover:bg-accent flex size-10 items-center justify-center transition-all duration-300 dark:bg-[#1E3A5F] dark:text-white dark:group-hover:text-[#0B1F3A]">
                                  <ServiceIcon name={service.icon} className="size-5" />
                                </span>
                                <h4 className="font-heading text-foreground group-hover:text-primary text-sm font-bold tracking-tight transition-colors duration-300">
                                  {service.title}
                                </h4>
                              </div>
                              <p className="text-text-secondary mb-space-16 line-clamp-2 text-xs leading-relaxed">
                                {service.shortDescription}
                              </p>
                            </div>
                            <div className="gap-space-4 text-primary group-hover:text-accent inline-flex items-center text-xs font-semibold transition-colors duration-200">
                              Explore
                              <ArrowRight className="group-hover:translate-x-space-4 size-3.5 transition-transform duration-300" />
                            </div>
                          </Link>
                        ))}

                        {/* Mega Menu CTA Card */}
                        <div className="from-primary to-secondary p-space-24 flex flex-col justify-between rounded-lg bg-gradient-to-br text-white shadow-md">
                          <div>
                            <h4 className="font-heading mb-space-8 text-accent text-base font-bold">
                              Need a Custom Solution?
                            </h4>
                            <p className="text-[11px] leading-relaxed text-white/80">
                              Our certified engineering team is ready to design and execute turnkey
                              mechanical and fitout matrices for your asset.
                            </p>
                          </div>
                          <Link
                            href="/contact"
                            className={cn(
                              buttonVariants({ variant: 'primary', size: 'sm' }),
                              'mt-space-16 w-full text-center text-[10px] tracking-wider',
                            )}
                            prefetch={false}
                          >
                            Request Quote
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-heading py-space-16 focus-visible:text-accent border-b-2 text-xs font-bold tracking-widest uppercase transition-all focus-visible:outline-none',
                  isTransparent
                    ? isActive
                      ? 'border-accent text-accent'
                      : 'hover:text-accent hover:border-accent/40 border-transparent text-white/90'
                    : isActive
                      ? 'border-accent text-accent'
                      : 'text-foreground hover:text-primary hover:border-primary/30 border-transparent',
                )}
                aria-current={isActive ? 'page' : undefined}
                prefetch={false}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Action Elements block */}
        <div className="gap-space-16 hidden items-center md:flex">
          {/* Search Trigger */}
          <button
            onClick={() => setSearchOpen(true)}
            className={cn(
              'p-space-8 rounded-badge focus-visible:ring-accent transition-colors focus-visible:ring-2 focus-visible:outline-none',
              isTransparent ? 'text-white hover:bg-white/10' : 'hover:bg-primary/5 text-foreground',
            )}
            aria-label="Open search overlay"
            aria-expanded={searchOpen}
          >
            <Search className="size-4.5" />
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={cn(
              'focus-visible:ring-accent cursor-pointer rounded-full p-2 transition-colors duration-300 select-none focus-visible:ring-2 focus-visible:outline-none',
              isTransparent
                ? 'text-white hover:bg-white/10'
                : 'hover:bg-primary/5 text-[#0B1F3A] dark:text-white',
            )}
            aria-label="Toggle theme mode"
          >
            {mounted && theme === 'dark' ? (
              <Sun className="text-accent size-4.5" />
            ) : (
              <Moon className="size-4.5" />
            )}
          </button>

          {/* Core Request Quote Link */}
          <Link
            href="/contact"
            className={cn(
              'inline-flex h-10 cursor-pointer items-center justify-center rounded-xl px-5 text-xs font-bold tracking-widest uppercase transition-all duration-300 select-none focus-visible:ring-2 focus-visible:ring-[#D4A84F] focus-visible:outline-none',
              isTransparent
                ? 'border border-white/20 bg-transparent text-white hover:border-[#D4A84F] hover:bg-[#D4A84F] hover:text-[#0B1628] hover:shadow-[0_0_15px_rgba(212,168,79,0.3)]'
                : 'bg-[#0B1628] text-white hover:bg-[#D4A84F] hover:text-[#0B1628] hover:shadow-[0_0_15px_rgba(212,168,79,0.3)] dark:bg-[#D4A84F] dark:text-[#0B1628] dark:hover:bg-[#C89B3C]',
            )}
            prefetch={false}
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="gap-space-12 flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={cn(
              'p-space-8 rounded-btn focus-visible:ring-accent transition-colors focus-visible:ring-2 focus-visible:outline-none',
              isTransparent ? 'text-white hover:bg-white/10' : 'hover:bg-primary/5 text-foreground',
            )}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu drawer"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* 3. MOBILE MENU SLIDE-IN DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex h-screen w-full flex-col justify-between overflow-y-auto bg-[#050e1a]/98 p-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                {/* Drawer Header */}
                <div className="mb-6 flex shrink-0 items-center justify-between border-b border-white/5 pb-4 select-none">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src="/images/logo/rep-logo.webp"
                      alt="REP Logo"
                      width={32}
                      height={28}
                      className="h-8 w-auto object-contain"
                    />
                    <span className="font-heading text-lg font-black tracking-tight text-white">
                      REP <span className="text-accent">PVT LTD</span>
                    </span>
                  </Link>
                  <div className="flex items-center gap-2">
                    {/* Theme Toggle Mobile */}
                    <button
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className="cursor-pointer rounded-lg p-2 text-gray-400 hover:text-white focus:outline-none"
                      aria-label="Toggle theme"
                    >
                      {mounted && theme === 'dark' ? (
                        <Sun className="text-accent size-5" />
                      ) : (
                        <Moon className="size-5 text-white" />
                      )}
                    </button>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="cursor-pointer rounded-lg p-2 text-gray-400 hover:text-white focus:outline-none"
                      aria-label="Close menu"
                    >
                      <X className="size-6" />
                    </button>
                  </div>
                </div>

                {/* Links Stack */}
                <div className="flex flex-col gap-5 py-2">
                  {NAV_LINKS.map((link) => {
                    if (link.label === 'Services') {
                      return (
                        <div key={link.label} className="border-b border-white/5 pb-3">
                          <button
                            onClick={() => setMobileServicesOpen((prev) => !prev)}
                            className="font-heading flex w-full items-center justify-between py-2 text-sm font-bold tracking-wider text-white uppercase focus:outline-none"
                            aria-expanded={mobileServicesOpen}
                          >
                            <span>{link.label}</span>
                            <ChevronDown
                              className={cn(
                                'size-5 transition-transform duration-300',
                                mobileServicesOpen && 'text-accent rotate-180',
                              )}
                            />
                          </button>

                          {/* Mobile Services Accordion */}
                          <motion.div
                            initial={false}
                            animate={{ height: mobileServicesOpen ? 'auto' : 0 }}
                            className="mt-1.5 flex flex-col gap-2.5 overflow-hidden pl-4"
                          >
                            {SERVICES.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services#${service.id}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="hover:text-accent flex items-center gap-2 py-1 text-xs font-semibold text-gray-400 transition-colors"
                                prefetch={false}
                              >
                                <span className="bg-accent/40 size-1.5 shrink-0 rounded-full" />
                                <span>{service.title}</span>
                              </Link>
                            ))}
                          </motion.div>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-heading hover:text-accent border-b border-white/5 py-2 pb-3 text-sm font-bold tracking-wider text-white uppercase transition-colors"
                        prefetch={false}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="mt-8 flex shrink-0 flex-col gap-4 border-t border-white/5 pt-5">
                {/* Search Bar Input */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                  className="relative w-full cursor-pointer text-left focus:outline-none"
                >
                  <Search className="top-1/2 left-4 size-4.5 -translate-y-1/2 text-gray-400" />
                  <div className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pr-4 pl-11 text-left text-xs text-gray-400 select-none">
                    Search services, projects, sectors...
                  </div>
                </button>

                {/* Request Quote Button */}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ height: '48px' }}
                  className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[12px] bg-white text-xs font-bold tracking-[0.5px] text-[#0B1628] uppercase transition-all duration-300 select-none hover:bg-[#D4A84F] hover:text-[#0B1628] focus-visible:ring-2 focus-visible:ring-[#D4A84F] focus-visible:outline-none"
                  prefetch={false}
                >
                  <span>SEND INQUIRY</span>
                  <span className="text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                {/* Company Contact Details */}
                <div className="mt-1 flex flex-col gap-2.5 text-xs text-gray-400 select-none">
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/[^+\d]/g, '')}`}
                    className="hover:text-accent flex items-center gap-2 transition-colors"
                  >
                    <Phone className="text-accent size-4" />
                    <span>{SITE_CONFIG.phone}</span>
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    className="hover:text-accent flex items-center gap-2 transition-colors"
                  >
                    <Mail className="text-accent size-4" />
                    <span>{SITE_CONFIG.contactEmail}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay Modal */}
      <AnimatePresence>
        {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}
