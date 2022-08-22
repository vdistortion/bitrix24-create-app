module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
