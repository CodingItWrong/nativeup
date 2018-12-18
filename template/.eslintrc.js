module.exports = {
  extends: [
    'plugin:react/recommended',
    'codingitwrong',
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
    'detox/detox': true,
    'jest/globals': true,
    'node': true,
  },
  rules: {
    'react/prop-types': 'off',
  }
};
