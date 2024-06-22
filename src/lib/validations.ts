const passwordRules = [
  {
    name: '8 Characters min.',
    check: (value: string) => value.length >= 8,
    message: 'Password must be at least 8 characters',
  },
  {
    name: 'One number',
    check: (value: string) => /\d/.test(value),
    message: 'Password must contain at least one number',
  },
];

export const checkPasswordValidity = (value: string) => {
  return passwordRules.map((rule, index) => ({
    name: rule.name,
    isValid: passwordRules[index].check(value),
  }));
};
