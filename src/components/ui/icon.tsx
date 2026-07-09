import * as React from 'react';
import { type LucideIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const iconVariants = cva(
  'inline-flex shrink-0 items-center justify-center select-none text-current transition-all duration-200',
  {
    variants: {
      size: {
        16: 'size-space-16',
        20: 'size-space-20',
        24: 'size-space-24',
        32: 'size-space-32',
        48: 'size-space-48',
      },
    },
    defaultVariants: {
      size: 24,
    },
  },
);

export interface IconProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof iconVariants> {
  icon: LucideIcon;
  strokeWidth?: number | string;
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ className, icon: LucideIconComponent, size = 24, strokeWidth = 2, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(iconVariants({ size, className }))} {...props}>
        <LucideIconComponent className="size-full" strokeWidth={strokeWidth} aria-hidden="true" />
      </span>
    );
  },
);

Icon.displayName = 'Icon';

export { Icon, iconVariants };
