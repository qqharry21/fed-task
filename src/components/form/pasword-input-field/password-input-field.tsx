import React, { useCallback, useState } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

import { Button } from '../../ui/button';
import { InputField } from '../input-field';

import './style.css';

interface PasswordInputFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> {
  name: TName;
  control: Control<TFieldValues>;
  label: string;
}

export const PasswordInputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  label,
}: PasswordInputFieldProps<TFieldValues, TName>) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <InputField
      name={name}
      label={label}
      control={control}
      className='password-control'
      type={showPassword ? 'text' : 'password'}
      extraElement={<TogglePasswordVisibilityButton onClick={togglePasswordVisibility} />}
    >
      <PasswordCheck />
    </InputField>
  );
};

const TogglePasswordVisibilityButton = React.memo(({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      type='button'
      variant='ghost'
      className='password-toggle-control'
      onClick={onClick}
    >
      <svg
        width='19'
        height='19'
        viewBox='0 0 19 19'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M18.8792 9.13046C18.7095 8.89826 14.6652 3.44507 9.49991 3.44507C4.33461 3.44507 0.290122 8.89827 0.120569 9.13024C-0.0401895 9.35052 -0.0401895 9.64929 0.120569 9.86957C0.290122 10.1018 4.33461 15.555 9.49991 15.555C14.6652 15.555 18.7095 10.1017 18.8792 9.86975C19.0402 9.64951 19.0402 9.35052 18.8792 9.13046ZM9.49991 14.3022C5.69511 14.3022 2.39976 10.6828 1.42426 9.49959C2.39849 8.31531 5.68695 4.69781 9.49991 4.69781C13.3045 4.69781 16.5996 8.31657 17.5756 9.50044C16.6013 10.6847 13.3129 14.3022 9.49991 14.3022Z' />
        <path d='M9.4999 5.7417C7.42763 5.7417 5.74164 7.42769 5.74164 9.49996C5.74164 11.5722 7.42763 13.2582 9.4999 13.2582C11.5722 13.2582 13.2582 11.5722 13.2582 9.49996C13.2582 7.42769 11.5722 5.7417 9.4999 5.7417ZM9.4999 12.0054C8.11831 12.0054 6.99442 10.8815 6.99442 9.49996C6.99442 8.11841 8.11835 6.99448 9.4999 6.99448C10.8814 6.99448 12.0054 8.11841 12.0054 9.49996C12.0054 10.8815 10.8815 12.0054 9.4999 12.0054Z' />
      </svg>
    </Button>
  );
});
TogglePasswordVisibilityButton.displayName = 'TogglePasswordVisibilityButton';

const PasswordCheck = () => {
  return <div>Test</div>;
};
