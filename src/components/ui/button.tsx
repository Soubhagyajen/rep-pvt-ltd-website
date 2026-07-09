import * as React from 'react';
import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-btn text-sm font-semibold tracking-wide uppercase select-none outline-none transition-all duration-300 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-accent-foreground border border-transparent shadow-md hover:bg-accent-hover hover:shadow-premium hover:-translate-y-0.5 active:translate-y-0',
        secondary:
          'bg-secondary text-secondary-foreground border border-transparent shadow-sm hover:bg-secondary/90 hover:-translate-y-0.5 active:translate-y-0 dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80',
        outline:
          'bg-transparent text-primary border border-primary/30 shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5 active:translate-y-0 dark:text-foreground dark:border-border/30 dark:hover:bg-white/5',
        ghost: 'bg-transparent text-foreground hover:bg-muted hover:text-foreground',
        link: 'bg-transparent text-accent hover:underline lowercase normal-case tracking-normal font-medium shadow-none hover:shadow-none hover:-translate-y-0 active:translate-y-0 p-0 h-auto',
      },
      size: {
        sm: "h-space-32 px-space-16 text-xs gap-space-8 [&_svg:not([class*='size-'])]:size-3.5",
        md: "h-space-48 px-space-24 text-sm gap-space-8 [&_svg:not([class*='size-'])]:size-4",
        lg: "h-space-56 px-space-32 text-base gap-space-12 [&_svg:not([class*='size-'])]:size-5",
        xl: "h-space-64 px-space-40 text-lg gap-space-12 [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps extends ButtonPrimitive.Props, VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <ButtonPrimitive
        ref={ref}
        data-slot="button"
        disabled={disabled || loading}
        aria-busy={loading ? 'true' : undefined}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" aria-hidden="true" />}
        {!loading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </ButtonPrimitive>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
