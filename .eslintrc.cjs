module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', 'import', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    "prettier/prettier": ["error", {}, { "usePrettierrc": true }],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^@?\\w', '^react\\w'],
          // Your internal path aliases
          ['^@/public(\\/.*|$)'],
          ['^@/components(\\/.*|$)'],
          ['^@/hooks(\\/.*|$)'],
          ['^@/styles(\\/.*|$)'],
          ['^@/lib(\\/.*|$)'],
          ['^@/utils(\\/.*|$)'],

          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports (CSS, SCSS)
          ['^.+\\.s?(css)$'],
        ],
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
