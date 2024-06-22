import * as React from 'react';
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { Controller, FormProvider, useFormContext } from 'react-hook-form';

import { Label } from '@/components/ui/label';

import { cn } from '@/lib/utils';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);

  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within FormField');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `form-item-${id}`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        className={cn('form-group', className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
};
FormItem.displayName = 'FormItem';

const FormLabel = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Label>) => {
  const { formItemId } = useFormField();

  return (
    <Label
      className={cn('form-label', className)}
      htmlFor={formItemId}
      {...props}
    >
      {children}
    </Label>
  );
};
FormLabel.displayName = 'FormLabel';

const FormControl = (props: React.ComponentPropsWithoutRef<typeof Slot>) => {
  const { error, formItemId } = useFormField();

  return (
    <Slot
      id={formItemId}
      aria-invalid={!!error}
      {...props}
    />
  );
};
FormControl.displayName = 'FormControl';

const Slot = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
    });
  }

  return <>{children}</>;
};
Slot.displayName = 'Slot';

export { Form, FormControl, FormField, FormItem, FormLabel, useFormField };
