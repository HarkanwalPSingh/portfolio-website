import * as React from 'react';
import { cn } from '@/lib/utils';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  };
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = 'md', responsive, ...props }, ref) => {
    const gapClasses = {
      none: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    };

    const colsClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      12: 'grid-cols-12',
    };

    const responsiveClasses = {
      1: {
        sm: 'sm:grid-cols-1',
        md: 'md:grid-cols-1',
        lg: 'lg:grid-cols-1',
        xl: 'xl:grid-cols-1',
      },
      2: {
        sm: 'sm:grid-cols-2',
        md: 'md:grid-cols-2',
        lg: 'lg:grid-cols-2',
        xl: 'xl:grid-cols-2',
      },
      3: {
        sm: 'sm:grid-cols-3',
        md: 'md:grid-cols-3',
        lg: 'lg:grid-cols-3',
        xl: 'xl:grid-cols-3',
      },
      4: {
        sm: 'sm:grid-cols-4',
        md: 'md:grid-cols-4',
        lg: 'lg:grid-cols-4',
        xl: 'xl:grid-cols-4',
      },
      5: {
        sm: 'sm:grid-cols-5',
        md: 'md:grid-cols-5',
        lg: 'lg:grid-cols-5',
        xl: 'xl:grid-cols-5',
      },
      6: {
        sm: 'sm:grid-cols-6',
        md: 'md:grid-cols-6',
        lg: 'lg:grid-cols-6',
        xl: 'xl:grid-cols-6',
      },
      12: {
        sm: 'sm:grid-cols-12',
        md: 'md:grid-cols-12',
        lg: 'lg:grid-cols-12',
        xl: 'xl:grid-cols-12',
      },
    };

    const getResponsiveClasses = () => {
      if (!responsive) return '';
      
      const classes = [];
      if (responsive.sm) classes.push(responsiveClasses[responsive.sm].sm);
      if (responsive.md) classes.push(responsiveClasses[responsive.md].md);
      if (responsive.lg) classes.push(responsiveClasses[responsive.lg].lg);
      if (responsive.xl) classes.push(responsiveClasses[responsive.xl].xl);
      
      return classes.join(' ');
    };

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          colsClasses[cols],
          gapClasses[gap],
          getResponsiveClasses(),
          className
        )}
        {...props}
      />
    );
  }
);
Grid.displayName = 'Grid';

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  start?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  end?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
}

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, span, start, end, ...props }, ref) => {
    const spanClasses = span && {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      7: 'col-span-7',
      8: 'col-span-8',
      9: 'col-span-9',
      10: 'col-span-10',
      11: 'col-span-11',
      12: 'col-span-12',
    }[span];

    const startClasses = start && {
      1: 'col-start-1',
      2: 'col-start-2',
      3: 'col-start-3',
      4: 'col-start-4',
      5: 'col-start-5',
      6: 'col-start-6',
      7: 'col-start-7',
      8: 'col-start-8',
      9: 'col-start-9',
      10: 'col-start-10',
      11: 'col-start-11',
      12: 'col-start-12',
      13: 'col-start-13',
    }[start];

    const endClasses = end && {
      1: 'col-end-1',
      2: 'col-end-2',
      3: 'col-end-3',
      4: 'col-end-4',
      5: 'col-end-5',
      6: 'col-end-6',
      7: 'col-end-7',
      8: 'col-end-8',
      9: 'col-end-9',
      10: 'col-end-10',
      11: 'col-end-11',
      12: 'col-end-12',
      13: 'col-end-13',
    }[end];

    return (
      <div
        ref={ref}
        className={cn(spanClasses, startClasses, endClasses, className)}
        {...props}
      />
    );
  }
);
GridItem.displayName = 'GridItem';

export { Grid, GridItem };