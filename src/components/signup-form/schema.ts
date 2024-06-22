import { z } from 'zod';

export const signupSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .refine((val) => /[0-9]/.test(val), 'Password must contain at least one number'),
});
