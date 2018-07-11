module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'codingitwrong',
  ],
  parser: 'babel-eslint',
  plugins: [
    'detox',
    'jest',
  ],
  env: {
    'detox/detox': true,
    'jest/globals': true,
  },
  rules: {
    'react/prop-types': 'off',
  },
};
