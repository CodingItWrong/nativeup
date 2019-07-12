module.exports = {
  extends: [
    'plugin:react/recommended',
    'codingitwrong',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: '16.5',
    },
  },
  parser: 'babel-eslint',
  plugins: ['jest'],
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    node: true,
  },
  globals: {
    __DEV__: true,
    fail: true,
  },
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
  },
};
