import React from 'react';

import { cn } from '@/lib/utils';

import './style.css';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & WithClassName
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn('input-field', className)}
      {...props}
    />
  );
});

Input.displayName = 'Input';
