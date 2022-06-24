module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'digitalbazaar',
    'digitalbazaar/jsdoc',
    'digitalbazaar/module'
  ],
  rules: {
    'jsdoc/check-examples': 'off',
    'unicorn/prefer-node-protocol': 'error'
  }
};
