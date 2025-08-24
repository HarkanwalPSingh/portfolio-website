'use client';

import * as React from 'react';
import { trapFocus } from '@/lib/accessibility';

interface FocusTrapProps {
  children: React.ReactNode;
  active?: boolean;
  restoreFocus?: boolean;
}

export function FocusTrap({ children, active = true, restoreFocus = true }: FocusTrapProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const previousActiveElement = React.useRef<Element | null>(null);

  React.useEffect(() => {
    if (!active || !containerRef.current) return;

    // Store the currently focused element
    if (restoreFocus) {
      previousActiveElement.current = document.activeElement;
    }

    // Set up focus trap
    const cleanup = trapFocus(containerRef.current);

    return () => {
      cleanup();
      
      // Restore focus to the previously focused element
      if (restoreFocus && previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus();
      }
    };
  }, [active, restoreFocus]);

  return (
    <div ref={containerRef} style={{ outline: 'none' }} tabIndex={-1}>
      {children}
    </div>
  );
}