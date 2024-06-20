import { ReturnButton } from '@/components/return-button';
import { SignupForm } from '@/components/signup-form';

import './style.css';

export const SignupPage = () => {
  return (
    <div className='signup-wrapper'>
      <div className='signup-header'>
        <ReturnButton />
      </div>
      <SignupForm />
    </div>
  );
};
