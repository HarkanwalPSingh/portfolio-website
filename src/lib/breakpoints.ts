// Breakpoint system based on Tailwind CSS defaults
export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

// Media query strings
export const mediaQueries = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)', 
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
} as const;

// Get current breakpoint
export function getCurrentBreakpoint(): Breakpoint {
  if (typeof window === 'undefined') return 'sm'; // SSR fallback

  const width = window.innerWidth;
  
  if (width >= breakpoints['2xl']) return '2xl';
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
}

// Check if current breakpoint matches
export function isBreakpoint(breakpoint: Breakpoint): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(mediaQueries[breakpoint]).matches;
}

// Check if current breakpoint is at least the specified breakpoint
export function isBreakpointUp(breakpoint: Breakpoint): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints[breakpoint];
}

// Check if current breakpoint is below the specified breakpoint
export function isBreakpointDown(breakpoint: Breakpoint): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < breakpoints[breakpoint];
}

// Get responsive value based on current breakpoint
export function getResponsiveValue<T>(
  values: Partial<Record<Breakpoint, T>>,
  fallback: T
): T {
  const currentBreakpoint = getCurrentBreakpoint();
  
  // Check current breakpoint and fallback to smaller breakpoints
  const orderedBreakpoints: Breakpoint[] = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
  const currentIndex = orderedBreakpoints.indexOf(currentBreakpoint);
  
  for (let i = currentIndex; i < orderedBreakpoints.length; i++) {
    const bp = orderedBreakpoints[i];
    if (values[bp] !== undefined) {
      return values[bp] as T;
    }
  }
  
  return fallback;
}

// Responsive utility classes generator
export function createResponsiveClasses<T extends string>(
  baseClass: T,
  breakpointValues: Partial<Record<Breakpoint, string>>
): string {
  const classes: string[] = [];
  
  Object.entries(breakpointValues).forEach(([breakpoint, value]) => {
    const bp = breakpoint as Breakpoint;
    if (bp === 'xs') {
      classes.push(`${baseClass}-${value}`);
    } else {
      classes.push(`${bp}:${baseClass}-${value}`);
    }
  });
  
  return classes.join(' ');
}

// Container max widths for each breakpoint
export const containerMaxWidths = {
  sm: 'max-w-screen-sm', // 640px
  md: 'max-w-screen-md', // 768px
  lg: 'max-w-screen-lg', // 1024px
  xl: 'max-w-screen-xl', // 1280px
  '2xl': 'max-w-screen-2xl', // 1536px
} as const;