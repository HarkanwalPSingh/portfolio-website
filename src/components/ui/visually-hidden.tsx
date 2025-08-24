import * as React from 'react';
import { cn } from '@/lib/utils';

interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean;
}

const VisuallyHidden = React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    if (asChild) {
      return (
        <>
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<{className?: string}>, {
                  className: cn('sr-only', (child.props as {className?: string})?.className),
                })
              : child
          )}
        </>
      );
    }

    return (
      <span
        ref={ref}
        className={cn('sr-only', className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);
VisuallyHidden.displayName = 'VisuallyHidden';

export { VisuallyHidden };