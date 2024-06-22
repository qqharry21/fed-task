import React from 'react';

import './style.css';

interface CheckboxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckboxChange?: (checked: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ checked, onCheckboxChange, ...props }, ref) => {
    return (
      <button
        type='button'
        role='checkbox'
        aria-checked={checked}
        className='checkbox-field'
        onClick={() => onCheckboxChange?.(!checked)}
        ref={ref}
        {...props}
      >
        {checked && (
          <span className='checkbox-icon'>
            <svg
              width='11'
              height='9'
              viewBox='0 0 11 9'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M9.5 0L11 1.25L4.5 8.75L0 4.25L1.375 2.875L4.375 5.875L9.5 0Z' />
            </svg>
          </span>
        )}
      </button>
    );
  }
);

Checkbox.displayName = 'Checkbox';
