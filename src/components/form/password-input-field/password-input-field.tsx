import { useCallback, useMemo, useState } from 'react';
import { Control, FieldPath, FieldValues, useWatch } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { checkPasswordValidity } from '@/lib/validations';

import { InputField } from '../input-field';

import { PasswordVisibilityButton } from './password-visibility-button';

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
  const passwordValue = useWatch({
    control,
    name,
  });

  const [showPassword, setShowPassword] = useState(false);

  const passwordValidationResults = useMemo(
    () => checkPasswordValidity(passwordValue),
    [passwordValue]
  );

  const toggleVisibility = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <InputField
      name={name}
      label={label}
      control={control}
      className='password-control'
      type={showPassword ? 'text' : 'password'}
      extraElement={<PasswordVisibilityButton onClick={toggleVisibility} />}
    >
      <div className='password-rule-wrapper'>
        <div className='password-rule-group'>
          {passwordValidationResults.map((rule, index) => (
            <PasswordRule
              key={`password-rule-${index}`}
              isValid={rule.isValid}
              message={rule.name}
            />
          ))}
        </div>
      </div>
    </InputField>
  );
};

const PasswordRule = ({ isValid, message }: { isValid: boolean; message: string }) => {
  return (
    <div className={cn('password-rule', isValid && 'password-rule--valid')}>
      <span>{message}</span>
    </div>
  );
};
