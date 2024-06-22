import { Button } from './ui/button';

interface SocialButtonProps {
  type: 'google' | 'facebook';
}

export const SocialButton = ({ type }: SocialButtonProps) => {
  return (
    <Button
      variant='outline'
      className='btn-social'
    >
      {type === 'google' ? (
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M8 6.4V9.6H12.5264C11.8656 11.4624 10.0864 12.8 8 12.8C5.3536 12.8 3.2 10.6464 3.2 8C3.2 5.3536 5.3536 3.2 8 3.2C9.1472 3.2 10.2512 3.6112 11.1088 4.3584L13.2112 1.9456C11.7712 0.6912 9.9216 0 8 0C3.5888 0 0 3.5888 0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8V6.4H8Z' />
        </svg>
      ) : (
        <svg
          width='9'
          height='16'
          viewBox='0 0 9 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M6.66469 2.65667H8.12536V0.112667C7.87336 0.078 7.00669 0 5.99736 0C3.89136 0 2.44869 1.32467 2.44869 3.75933V6H0.124695V8.844H2.44869V16H5.29803V8.84467H7.52803L7.88203 6.00067H5.29736V4.04133C5.29803 3.21933 5.51936 2.65667 6.66469 2.65667Z' />
        </svg>
      )}
      {type === 'google' ? 'Sign up with Google' : 'Sign up with Facebook'}
    </Button>
  );
};
