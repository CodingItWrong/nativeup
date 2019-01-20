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
  plugins: [
    'detox',
    'jest',
  ],
  env: {
    'browser': true,
    'detox/detox': true,
    'es6': true,
    'jest/globals': true,
    'node': true,
  },
  globals: {
    'after': true,
    'afterEach': true,
    'before': true,
    'beforeEach': true,
    'describe': true,
    'expect': true,
    'it': true,
    'sinon': true
  },
  rules: {
    'react/prop-types': 'off',
  }
};
