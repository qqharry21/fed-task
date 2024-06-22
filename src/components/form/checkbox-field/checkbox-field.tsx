import { Control, FieldPath, FieldValues } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';

import { cn } from '@/lib/utils';

import './style.css';

interface CheckboxFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends WithClassName {
  name: TName;
  control: Control<TFieldValues>;
  label: string;
}

export const CheckboxField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  className,
}: CheckboxFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={cn('checkbox-field-group', className)}>
          <FormControl>
            <Checkbox
              {...field}
              checked={field.value}
              onCheckboxChange={field.onChange}
            />
          </FormControl>
          <FormLabel className='checkbox-field-label'>{label}</FormLabel>
        </FormItem>
      )}
    />
  );
};
