module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 'off',
    'react-native/no-inline-styles': 'off',
    'import/extensions': 'off', // Disable for react-native imports
    'import/no-unresolved': 'off', // Disable for react-native imports
    'react/jsx-filename-extension': [1, {extensions: ['.tsx', '.jsx']}],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'error', // any 타입 사용 경고
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // @types/* 모듈도 확인합니다
      },
    },
  },
};
