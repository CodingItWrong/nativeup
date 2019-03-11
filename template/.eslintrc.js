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
  plugins: ['detox'],
  env: {
    browser: true,
    'detox/detox': true,
    es6: true,
    node: true,
  },
  globals: {
    __DEV__: true,
    after: true,
    afterEach: true,
    before: true,
    beforeEach: true,
    describe: true,
    expect: true,
    it: true,
    sinon: true,
  },
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
  },
};
