import React from 'react';

import { cn } from '@/lib/utils';

import './style.css';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn('input', className)}
      {...props}
    />
  );
});
