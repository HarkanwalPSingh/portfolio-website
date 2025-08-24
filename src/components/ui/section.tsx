import * as React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'muted' | 'accent';
  withContainer?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    containerSize = 'lg', 
    padding = 'lg',
    background = 'default',
    withContainer = true,
    children,
    ...props 
  }, ref) => {
    const paddingClasses = {
      none: '',
      sm: 'py-8 md:py-12',
      md: 'py-12 md:py-16',
      lg: 'py-16 md:py-20 lg:py-24',
      xl: 'py-24 md:py-32 lg:py-40',
    };

    const backgroundClasses = {
      default: '',
      muted: 'bg-muted/50',
      accent: 'bg-accent/10',
    };

    const content = withContainer ? (
      <Container size={containerSize}>{children}</Container>
    ) : (
      children
    );

    return (
      <section
        ref={ref}
        className={cn(
          paddingClasses[padding],
          backgroundClasses[background],
          className
        )}
        {...props}
      >
        {content}
      </section>
    );
  }
);
Section.displayName = 'Section';

export { Section };