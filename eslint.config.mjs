import { FlatCompat } from '@eslint/eslintrc';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Get the configs we want to extend from
const nextConfig = compat.extends('next/core-web-vitals')[0];
const tsConfig = compat.extends('next/typescript')[0];
const prettierConfig = compat.extends('prettier')[0];
const tsRecommendedConfig = compat.extends(
  'plugin:@typescript-eslint/recommended-type-checked'
)[0];

// Base configuration for all files
const baseConfig = {
  name: 'base',
  ...nextConfig,
  ...tsConfig,
  ...prettierConfig,
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
    'jsx-a11y': jsxA11y,
    import: importPlugin,
    '@next/next': nextPlugin,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
    noInlineConfig: false,
  },
};

// TypeScript-specific configuration
const typescriptConfig = {
  name: 'typescript',
  files: ['**/*.{ts,tsx}'],
  ignores: [
    '**/*.config.ts',
    'next-env.d.ts',
    'node_modules/**',
    '.next/**',
    'dist/**',
  ],
  ...tsRecommendedConfig,
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
  },
  plugins: {
    '@typescript-eslint': tseslint,
  },
  rules: {
    // Disable overly strict rules
    'react/jsx-no-literals': 'off', // Too strict for most projects
    '@typescript-eslint/explicit-function-return-type': 'off', // Let TypeScript infer return types
    'import/no-default-export': 'off', // Next.js uses default exports for pages

    // Keep other TypeScript strict rules
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // React best practices
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/require-default-props': 'error',
    'react/jsx-sort-props': 'warn',
    'react/jsx-key': 'error',
    'react/hook-use-state': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/no-array-index-key': 'error',

    // Rest of your rules...
  },
};

// JavaScript-specific configuration
const javascriptConfig = {
  name: 'javascript',
  files: ['**/*.{js,jsx,mjs}'],
  ignores: ['**/*.config.js', '**/*.config.mjs'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
};

// Configuration files configuration
const configFilesConfig = {
  name: 'config-files',
  files: ['**/*.config.{js,ts,mjs}', 'tailwind.config.ts'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
  },
  rules: {
    'import/no-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};

// JSON files configuration
const jsonConfig = {
  name: 'json',
  files: ['**/*.json'],
  languageOptions: {
    parser: {
      parse: (text) => JSON.parse(text),
    },
  },
};

// Ignore configuration
const ignoresConfig = {
  name: 'ignores',
  ignores: [
    '**/node_modules/**',
    '**/.next/**',
    '**/dist/**',
    '**/build/**',
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    '.git/**',
    '.husky/**',
    '.vscode/**',
    'next-env.d.ts',
  ],
};

export default [
  ignoresConfig,
  baseConfig,
  typescriptConfig,
  javascriptConfig,
  configFilesConfig,
  jsonConfig,
];
