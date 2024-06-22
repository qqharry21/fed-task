import { Button } from './ui/button';

interface ReturnButtonProps {
  onClick?: () => void;
}

export const ReturnButton = ({ onClick }: ReturnButtonProps) => {
  return (
    <Button
      variant='link'
      className='btn-return'
      onClick={onClick}
    >
      <svg
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M5.854 3.646a.5.5 0 0 1 0 .708L2.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0z'
        />
        <path
          fillRule='evenodd'
          d='M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8z'
        />
      </svg>
      Back
    </Button>
  );
};
