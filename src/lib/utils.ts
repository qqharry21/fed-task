import clsx, { type ClassValue } from 'clsx';

export const cn = (...args: ClassValue[]) => {
  return clsx(...args);
};
