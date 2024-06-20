import { SocialButton } from '../social-button';

import './style.css';

export const SignupForm = () => {
  return (
    <form className='signup-form'>
      <div className='signup-content'>
        <div className='title-wrapper'>
          <div className='subtitle'>Start from free</div>
          <h1 className='title'>Create an account</h1>
        </div>
        <div className='social-group'>
          <SocialButton type='google' />
          <SocialButton type='facebook' />
        </div>
        <div className='separator'>Or use your email for registration</div>
      </div>
      <div className='signup-input-fields'>test</div>
      <div className='signup-footer'></div>
    </form>
  );
};
