module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-case-declarations': 'off',
    // "no-use-before-define": 0,
    'react/jsx-filename-extension': 'off',
    "react/prefer-stateless-function": 0,
    'react/prop-types': 'off',
    // "react/self-closing-comp": 0,
  }
};
