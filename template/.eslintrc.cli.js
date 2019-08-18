module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['detox'],
  env: {
    'detox/detox': true,
  },
  globals: {
    __DEV__: true,
    fail: true,
  },
};
