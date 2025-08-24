'use client';

import { useState, useEffect } from 'react';
import { getCurrentBreakpoint, isBreakpointUp, isBreakpointDown, type Breakpoint } from '@/lib/breakpoints';

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('sm');

  useEffect(() => {
    const updateBreakpoint = () => {
      setBreakpoint(getCurrentBreakpoint());
    };

    // Set initial breakpoint
    updateBreakpoint();

    // Listen for window resize
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return {
    current: breakpoint,
    isXs: breakpoint === 'xs',
    isSm: breakpoint === 'sm',
    isMd: breakpoint === 'md',
    isLg: breakpoint === 'lg',
    isXl: breakpoint === 'xl',
    is2Xl: breakpoint === '2xl',
    isSmUp: isBreakpointUp('sm'),
    isMdUp: isBreakpointUp('md'),
    isLgUp: isBreakpointUp('lg'),
    isXlUp: isBreakpointUp('xl'),
    is2XlUp: isBreakpointUp('2xl'),
    isSmDown: isBreakpointDown('sm'),
    isMdDown: isBreakpointDown('md'),
    isLgDown: isBreakpointDown('lg'),
    isXlDown: isBreakpointDown('xl'),
    is2XlDown: isBreakpointDown('2xl'),
  };
}