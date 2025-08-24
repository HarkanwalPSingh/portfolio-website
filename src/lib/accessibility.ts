// Keyboard navigation utilities
export const KEYBOARD_KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  TAB: 'Tab',
  ESCAPE: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
} as const;

// Check if an element is focusable
export function isFocusable(element: HTMLElement): boolean {
  const focusableElements = [
    'input',
    'select',
    'textarea',
    'button',
    'a',
    'area',
    'object',
    'embed',
    'iframe',
  ];
  
  const tagName = element.tagName.toLowerCase();
  
  if (focusableElements.includes(tagName)) {
    return !element.hasAttribute('disabled');
  }
  
  return element.hasAttribute('tabindex') && element.getAttribute('tabindex') !== '-1';
}

// Get all focusable elements within a container
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'object',
    'embed',
    'iframe',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
  ].join(', ');
  
  return Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];
}

// Trap focus within a container (useful for modals)
export function trapFocus(container: HTMLElement, firstFocusableElement?: HTMLElement) {
  const focusableElements = getFocusableElements(container);
  const firstElement = firstFocusableElement || focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  if (firstElement) {
    firstElement.focus();
  }
  
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== KEYBOARD_KEYS.TAB) return;
    
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }
  };
  
  container.addEventListener('keydown', handleKeyDown);
  
  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
}

// Announce messages to screen readers
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const announcer = document.createElement('div');
  announcer.setAttribute('aria-live', priority);
  announcer.setAttribute('aria-atomic', 'true');
  announcer.className = 'sr-only';
  
  document.body.appendChild(announcer);
  announcer.textContent = message;
  
  setTimeout(() => {
    document.body.removeChild(announcer);
  }, 1000);
}

// Generate unique IDs for accessibility attributes
let idCounter = 0;
export function generateId(prefix = 'id'): string {
  return `${prefix}-${++idCounter}`;
}

// Skip link functionality
export function createSkipLink(targetId: string, text = 'Skip to main content') {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:rounded-md';
  
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  return skipLink;
}

// Reduce motion check
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// High contrast check
export function prefersHighContrast(): boolean {
  return window.matchMedia('(prefers-contrast: high)').matches;
}