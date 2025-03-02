import { Link as InertiaLink } from '@inertiajs/react';
import React from 'react';

const StealthLink = React.forwardRef(({ children, href, ...props }, ref) => {
  return (
    <InertiaLink
      {...props}
      href={href}
      as="button" // Renders as a button instead of an anchor
      ref={ref}
      className="stealth-link" // Add custom styling
    >
      {children}
    </InertiaLink>
  );
});


export default StealthLink;