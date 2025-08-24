'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useBreakpoint } from '@/hooks/use-breakpoint';
import type { Breakpoint } from '@/lib/breakpoints';

interface ResponsiveProps {
  children: React.ReactNode;
  className?: string;
  show?: {
    up?: Breakpoint;
    down?: Breakpoint;
    only?: Breakpoint | Breakpoint[];
  };
  hide?: {
    up?: Breakpoint;
    down?: Breakpoint;
    only?: Breakpoint | Breakpoint[];
  };
}

export function Responsive({ children, className, show, hide }: ResponsiveProps) {
  const breakpoint = useBreakpoint();
  
  // Determine if component should be visible
  let isVisible = true;
  
  if (show) {
    isVisible = false;
    
    if (show.up) {
      switch (show.up) {
        case 'sm': isVisible = breakpoint.isSmUp; break;
        case 'md': isVisible = breakpoint.isMdUp; break;
        case 'lg': isVisible = breakpoint.isLgUp; break;
        case 'xl': isVisible = breakpoint.isXlUp; break;
        case '2xl': isVisible = breakpoint.is2XlUp; break;
      }
    }
    
    if (show.down && !isVisible) {
      switch (show.down) {
        case 'sm': isVisible = breakpoint.isSmDown; break;
        case 'md': isVisible = breakpoint.isMdDown; break;
        case 'lg': isVisible = breakpoint.isLgDown; break;
        case 'xl': isVisible = breakpoint.isXlDown; break;
        case '2xl': isVisible = breakpoint.is2XlDown; break;
      }
    }
    
    if (show.only && !isVisible) {
      const onlyBreakpoints = Array.isArray(show.only) ? show.only : [show.only];
      isVisible = onlyBreakpoints.includes(breakpoint.current);
    }
  }
  
  if (hide && isVisible) {
    if (hide.up) {
      switch (hide.up) {
        case 'sm': if (breakpoint.isSmUp) isVisible = false; break;
        case 'md': if (breakpoint.isMdUp) isVisible = false; break;
        case 'lg': if (breakpoint.isLgUp) isVisible = false; break;
        case 'xl': if (breakpoint.isXlUp) isVisible = false; break;
        case '2xl': if (breakpoint.is2XlUp) isVisible = false; break;
      }
    }
    
    if (hide.down && isVisible) {
      switch (hide.down) {
        case 'sm': if (breakpoint.isSmDown) isVisible = false; break;
        case 'md': if (breakpoint.isMdDown) isVisible = false; break;
        case 'lg': if (breakpoint.isLgDown) isVisible = false; break;
        case 'xl': if (breakpoint.isXlDown) isVisible = false; break;
        case '2xl': if (breakpoint.is2XlDown) isVisible = false; break;
      }
    }
    
    if (hide.only && isVisible) {
      const onlyBreakpoints = Array.isArray(hide.only) ? hide.only : [hide.only];
      if (onlyBreakpoints.includes(breakpoint.current)) isVisible = false;
    }
  }
  
  if (!isVisible) return null;
  
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
}

// Convenience components
export function ShowOnMobile({ children, className }: { children: React.ReactNode; className?: string }) {
  return <Responsive show={{ down: 'md' }} className={className}>{children}</Responsive>;
}

export function ShowOnTablet({ children, className }: { children: React.ReactNode; className?: string }) {
  return <Responsive show={{ only: ['md', 'lg'] }} className={className}>{children}</Responsive>;
}

export function ShowOnDesktop({ children, className }: { children: React.ReactNode; className?: string }) {
  return <Responsive show={{ up: 'lg' }} className={className}>{children}</Responsive>;
}

export function HideOnMobile({ children, className }: { children: React.ReactNode; className?: string }) {
  return <Responsive hide={{ down: 'md' }} className={className}>{children}</Responsive>;
}

export function HideOnTablet({ children, className }: { children: React.ReactNode; className?: string }) {
  return <Responsive hide={{ only: ['md', 'lg'] }} className={className}>{children}</Responsive>;
}

export function HideOnDesktop({ children, className }: { children: React.ReactNode; className?: string }) {
  return <Responsive hide={{ up: 'lg' }} className={className}>{children}</Responsive>;
}