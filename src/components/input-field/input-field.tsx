import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Input } from '../ui/input';
import { Label } from '../ui/label';

import './style.css';

export const InputField = () => {
  const [value, setValue] = useState<string>('');
  return (
    <div className='form-group'>
      <div
        className={cn('form-input-wrapper', {
          'form-input-wrapper--active': Boolean(value),
        })}
      >
        <Input
          type='text'
          className='form-input'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Label className='form-label'>First Name</Label>
    </div>
  );
};
