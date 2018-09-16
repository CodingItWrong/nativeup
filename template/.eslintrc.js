module.exports = {
  extends: [
    'plugin:react/recommended',
    'codingitwrong',
  ],
  settings: {
    react: {
      version: "16.4",
    },
  },
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
