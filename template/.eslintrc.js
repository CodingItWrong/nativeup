module.exports = {
  extends: [
    'plugin:react/recommended',
    'codingitwrong',
  ],
  settings: {
    react: {
      version: "16.6",
    },
  },
  parser: 'babel-eslint',
  plugins: [
    'detox',
  ],
  env: {
    'detox/detox': true,
    node: true,
  },
  globals: {
    after: true,
    afterEach: true,
    before: true,
    beforeEach: true,
    describe: true,
    it: true,
  },
  rules: {
    'react/prop-types': 'off',
  }
};
