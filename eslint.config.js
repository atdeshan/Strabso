import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      reactHooks.configs['flat/recommended'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Allow empty arrow functions in callbacks
      '@typescript-eslint/no-empty-function': 'off',
      // Allow any in certain edge cases but warn
      '@typescript-eslint/no-explicit-any': 'warn',
      // Allow non-null assertions with caution
      '@typescript-eslint/no-non-null-assertion': 'warn',
      // Prefer nullish coalescing for cleaner code
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      // Prefer optional chaining for cleaner code
      '@typescript-eslint/prefer-optional-chain': 'warn',
      // Allow floating promises in event handlers
      '@typescript-eslint/no-floating-promises': 'off',
      // Allow misused promises (common in React event handlers)
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
    },
  },
  eslintConfigPrettier
);
