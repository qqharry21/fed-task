import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { CheckboxField } from '../form/checkbox-field';
import { InputField } from '../form/input-field/input-field';
import { PasswordInputField } from '../form/password-input-field/password-input-field';
import { SocialButton } from '../social-button';
import { Button } from '../ui/button';
import { Form } from '../ui/form';

import './style.css';

const signupSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email().min(1),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/\d/, 'Password must contain at least one number'),
  acceptTerms: z.boolean(),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export const SignupForm = () => {
  const form = useForm<SignupFormValues>({
    mode: 'all',
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: SignupFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('🚨 - data', data);
  };
  return (
    <Form {...form}>
      <form
        className='signup-form'
        autoComplete='off'
        onSubmit={form.handleSubmit(onSubmit)}
      >
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
        <div className='signup-input-fields'>
          <InputField
            name='firstName'
            label='First Name'
            control={form.control}
          />
          <InputField
            name='lastName'
            label='Last Name'
            control={form.control}
          />
          <InputField
            name='email'
            label='Email'
            control={form.control}
            className='email-control'
          />
          <PasswordInputField
            name='password'
            control={form.control}
            label='Password'
          />
        </div>
        <div className='signup-footer'>
          <CheckboxField
            name='acceptTerms'
            control={form.control}
            className='accept-terms-control'
            label='By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.'
          />
          <Button
            type='submit'
            className='btn-wide'
          >
            Create an Free Account!
          </Button>
          <p className='account-text'>
            Already have an account? <a href='/'>Log in</a>
          </p>
        </div>
      </form>
    </Form>
  );
};
