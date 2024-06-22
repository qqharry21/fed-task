import { cn } from '@/lib/utils';

import './style.css';

interface AlertProps extends WithClassName, PropsWithChildren {
  variant?: 'success' | 'error';
}

export const Alert = ({ variant = 'error', className, children }: AlertProps) => {
  return (
    <div className={cn('alert-box', `alert-${variant}`, className)}>
      <span className='alert-icon'>
        {variant === 'error' ? (
          <svg
            width='21'
            height='20'
            viewBox='0 0 21 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10.5 0C4.9775 0 0.5 4.4775 0.5 10C0.5 15.5225 4.9775 20 10.5 20C16.0225 20 20.5 15.5225 20.5 10C20.5 4.4775 16.0225 0 10.5 0ZM11.75 16.25H9.25V13.75H11.75V16.25ZM11.75 12.5H9.25V5H11.75V12.5Z' />
          </svg>
        ) : (
          <></>
        )}
      </span>
      <p className='alert-message'>{children}</p>
    </div>
  );
};
