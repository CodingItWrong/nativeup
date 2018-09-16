module.exports = {
  extends: [
    'plugin:react/recommended',
    'codingitwrong',
  ],
  parser: 'babel-eslint',
  plugins: [
    'detox',
  ],
  env: {
    'detox/detox': true,
  },
  rules: {
    'react/prop-types': 'off',
  }
};
