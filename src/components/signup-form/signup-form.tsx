import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { InputField } from '../form/input-field/input-field';
import { PasswordInputField } from '../form/pasword-input-field/password-input-field';
import { SocialButton } from '../social-button';
import { Button } from '../ui/button';
import { Form } from '../ui/form';

import { signupSchema } from './schema';

import './style.css';

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
    },
  });

  console.log('🚨 - form', form.formState.errors);

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
          <Button
            type='submit'
            className='btn-wide'
          >
            Create an Free Account!
          </Button>
          <p>
            Already have an account? <a href='/'>Login</a>
          </p>
        </div>
      </form>
    </Form>
  );
};
