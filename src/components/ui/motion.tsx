'use client';

import * as React from 'react';
import { motion, useInView, useMotionValue, useSpring, type Variants } from 'framer-motion';

// --- REUSABLE ANIMATION VARIANTS (DESIGN SYSTEM PRESETS) ---

// Ease quint curve matching the design system
const transitionEase = [0.83, 0, 0.17, 1] as [number, number, number, number];

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: transitionEase },
  },
};

export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const revealVariants: Variants = {
  hidden: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
  visible: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: 0.8, ease: transitionEase },
  },
};

// --- HIGH-LEVEL REACT WRAPPER COMPONENTS ---

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function FadeIn({ children, className, delay = 0, once = true }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={fadeInVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({ children, className, delay = 0, once = true }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={fadeUpVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Scale({ children, className, delay = 0, once = true }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={scaleVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, once = true }: Omit<MotionWrapperProps, 'delay'>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={staggerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({ children, className, delay = 0, once = true }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={revealVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Spring physics-backed digit counter animation for statistics scroll
export interface CounterProps {
  value: number;
  direction?: 'up' | 'down';
  delay?: number;
  className?: string;
  suffix?: string;
}

export function Counter({
  value,
  direction = 'up',
  delay = 0,
  className,
  suffix = '',
}: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);

  // Set starting values
  const startVal = direction === 'down' ? value : 0;
  const targetVal = direction === 'down' ? 0 : value;

  const motionValue = useMotionValue(startVal);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    restDelta: 0.001,
  });

  const isInView = useInView(ref, { once: true, margin: '-50px' });

  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        // Trigger Framer Motion animate loop using values
        motionValue.set(targetVal);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, motionValue, targetVal, delay]);

  React.useEffect(() => {
    // Sync animation update loop with ref DOM content
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return (
    <span className={className}>
      <span ref={ref}>{startVal}</span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
