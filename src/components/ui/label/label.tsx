import React from 'react';

import { cn } from '@/lib/utils';

import './style.css';

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & WithClassName
>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn('label', className)}
      {...props}
    />
  );
});

Label.displayName = 'Label';
