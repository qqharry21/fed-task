import { Control, FieldPath, FieldValues } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { FormControl, FormField, FormItem, FormLabel } from '../../ui/form';
import { Input } from '../../ui/input';

import './style.css';

interface InputFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
  extends Partial<PropsWithChildren>,
    WithClassName {
  name: TName;
  control: Control<TFieldValues>;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  extraElement?: React.ReactNode;
}

export const InputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  label,
  className,
  children,
  extraElement,
  type = 'text',
}: InputFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={cn('input-field-group', className)}>
          <FormControl>
            <div
              className={cn('input-field-wrapper', {
                'input-field-wrapper--active': Boolean(field.value),
              })}
            >
              <Input
                type={type}
                className='form-input'
                {...field}
              />
              <FormLabel className='input-field-label'>{label}</FormLabel>
              {extraElement}
            </div>
          </FormControl>
          {children}
        </FormItem>
      )}
    />
  );
};
