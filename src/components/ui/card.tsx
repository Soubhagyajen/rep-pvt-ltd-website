'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Calendar, User, Building, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- CUSTOM INLINE SVG ICONS FOR SOCIALS (Resolves Lucide package version gaps) ---

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

// --- BASE ATOMIC CARD COMPONENTS ---

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-card border-border/60 bg-card text-card-foreground p-space-24 border shadow-md transition-all duration-300',
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('gap-space-8 pb-space-16 flex flex-col', className)} {...props} />
  ),
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-h4 text-foreground font-bold tracking-tight', className)}
      {...props}
    >
      {children}
    </h3>
  ),
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn('text-small text-text-secondary', className)} {...props}>
    {children}
  </p>
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('pt-0', className)} {...props} />,
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pt-space-16 flex items-center', className)} {...props} />
  ),
);
CardFooter.displayName = 'CardFooter';

// --- SPECIALIZED DESIGN SYSTEM CARD SELECTORS ---

// Ease quint curve matching the design system
const transitionEase = {
  duration: 0.4,
  ease: [0.83, 0, 0.17, 1] as [number, number, number, number],
};

// 1. Service Card
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  imageSrc?: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href = '#',
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={transitionEase}
      className={cn(
        'group rounded-card border-border/60 bg-card p-space-32 hover:border-accent/40 hover:shadow-premium relative flex flex-col justify-between overflow-hidden border shadow-md transition-all duration-300',
        className,
      )}
    >
      {/* Decorative Golden Top Line on Hover */}
      <div className="from-primary to-accent absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        <div className="mb-space-24 rounded-btn bg-secondary text-primary group-hover:bg-primary group-hover:text-accent dark:bg-secondary dark:text-primary dark:group-hover:bg-accent dark:group-hover:text-primary inline-flex size-14 items-center justify-center transition-all duration-300">
          <Icon className="size-7" />
        </div>
        <h3 className="text-h3 mb-space-12 text-foreground group-hover:text-primary font-bold tracking-tight transition-colors duration-300">
          {title}
        </h3>
        <p className="text-body text-text-secondary mb-space-24 leading-relaxed">{description}</p>
      </div>

      <Link
        href={href}
        className="gap-space-8 text-primary group-hover:text-accent inline-flex items-center text-sm font-bold tracking-wider uppercase transition-colors duration-300"
      >
        Learn More
        <ArrowRight className="group-hover:translate-x-space-4 size-4 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
}

// 2. Project Card
export interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  client: string;
  location: string;
  completionDate: string;
  href?: string;
  className?: string;
}

export function ProjectCard({
  title,
  category,
  imageSrc,
  client,
  location,
  completionDate,
  href = '#',
  className,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={transitionEase}
      className={cn(
        'group rounded-card border-border/60 bg-card hover:border-accent/40 hover:shadow-premium overflow-hidden border shadow-md transition-all duration-300',
        className,
      )}
    >
      <Link href={href} className="block">
        {/* Aspect Ratio Container for Responsive Image */}
        <div className="bg-secondary relative aspect-video w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle Overlay */}
          <div className="from-dark/60 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

          {/* Category Badge */}
          <span className="top-space-16 left-space-16 rounded-badge bg-primary px-space-12 py-space-4 text-primary-foreground dark:bg-accent dark:text-accent-foreground absolute text-xs font-semibold tracking-wider uppercase">
            {category}
          </span>
        </div>

        {/* Info Content Section */}
        <div className="p-space-24">
          <h3 className="text-h3 mb-space-16 text-foreground group-hover:text-primary line-clamp-1 font-bold transition-colors duration-300">
            {title}
          </h3>

          {/* Metadata Grid */}
          <div className="gap-space-8 border-border/40 pt-space-16 text-text-secondary grid grid-cols-1 border-t text-xs">
            <div className="gap-space-8 flex items-center">
              <Building className="text-accent size-3.5 shrink-0" />
              <span className="text-foreground font-semibold">Client:</span>
              <span className="line-clamp-1">{client}</span>
            </div>
            <div className="gap-space-8 flex items-center">
              <MapPin className="text-accent size-3.5 shrink-0" />
              <span className="text-foreground font-semibold">Location:</span>
              <span className="line-clamp-1">{location}</span>
            </div>
            <div className="gap-space-8 flex items-center">
              <Calendar className="text-accent size-3.5 shrink-0" />
              <span className="text-foreground font-semibold">Completed:</span>
              <span>{completionDate}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// 3. Testimonial Card
export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  avatarSrc?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating = 5,
  avatarSrc,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'rounded-card border-border/60 bg-card p-space-32 hover:border-accent/20 gap-space-24 flex flex-col justify-between border shadow-md transition-all duration-300 hover:shadow-lg',
        className,
      )}
    >
      <div>
        {/* Rating Stars Block */}
        <div className="gap-space-4 mb-space-16 flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'size-4 shrink-0',
                i < rating ? 'fill-accent text-accent' : 'text-border',
              )}
            />
          ))}
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-body text-foreground font-sans leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>

      {/* Author Details block */}
      <div className="gap-space-12 border-border/40 pt-space-16 flex items-center border-t">
        {avatarSrc ? (
          <div className="rounded-badge bg-secondary relative size-12 overflow-hidden">
            <Image src={avatarSrc} alt={author} fill className="object-cover" sizes="48px" />
          </div>
        ) : (
          <div className="rounded-badge bg-secondary text-primary flex size-12 shrink-0 items-center justify-center">
            <User className="size-6" />
          </div>
        )}
        <div>
          <h4 className="font-heading text-foreground text-sm font-semibold tracking-wide">
            {author}
          </h4>
          <p className="text-text-secondary mt-space-4 text-xs leading-none">
            {role}, <span className="font-semibold">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// 4. Stat Card
export interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={transitionEase}
      className={cn(
        'rounded-card border-border/60 bg-card p-space-32 hover:shadow-premium hover:border-accent/40 border text-center shadow-md transition-all duration-300',
        className,
      )}
    >
      <div className="text-numbers text-accent mb-space-8 text-4xl font-bold tracking-tight sm:text-5xl">
        {value}
      </div>
      <div className="font-heading text-text-secondary text-xs font-semibold tracking-wider uppercase">
        {label}
      </div>
    </motion.div>
  );
}

// 5. Team Card
export interface TeamCardProps {
  name: string;
  role: string;
  imageSrc: string;
  linkedin?: string;
  email?: string;
  twitter?: string;
  className?: string;
}

export function TeamCard({
  name,
  role,
  imageSrc,
  linkedin,
  email,
  twitter,
  className,
}: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={transitionEase}
      className={cn(
        'group rounded-card border-border/60 bg-card hover:border-accent/40 hover:shadow-premium overflow-hidden border shadow-md transition-all duration-300',
        className,
      )}
    >
      {/* Team Member Photo */}
      <div className="bg-secondary relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Soft Shadow Gradient Overlay */}
        <div className="from-dark/80 pb-space-24 absolute inset-0 flex items-end justify-center bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {/* Social Media Links inside Photo on Hover */}
          <div className="gap-space-16 translate-y-space-12 flex transform items-center transition-transform duration-300 group-hover:translate-y-0">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-badge text-primary hover:bg-accent flex size-10 items-center justify-center bg-white shadow-md transition-colors duration-200 hover:text-white"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <LinkedinIcon className="text-primary size-4 group-hover:text-white" />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="rounded-badge text-primary hover:bg-accent flex size-10 items-center justify-center bg-white shadow-md transition-colors duration-200 hover:text-white"
                aria-label={`Email ${name}`}
              >
                <Mail className="text-primary size-4 group-hover:text-white" />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-badge text-primary hover:bg-accent flex size-10 items-center justify-center bg-white shadow-md transition-colors duration-200 hover:text-white"
                aria-label={`${name}'s Twitter profile`}
              >
                <TwitterIcon className="text-primary size-4 group-hover:text-white" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-space-20 text-center">
        <h4 className="font-heading text-foreground group-hover:text-primary text-lg font-bold transition-colors duration-300">
          {name}
        </h4>
        <p className="text-accent mt-space-4 text-xs font-semibold tracking-wider uppercase">
          {role}
        </p>
      </div>
    </motion.div>
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
