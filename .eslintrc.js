module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // eslint-disable-next-line quotes
    "no-console": "off",
    // eslint-disable-next-line quotes
    "class-methods-use-this": "off",
    'import/first': 'off',
    'no-param-reassign': 'off',
  },
};
