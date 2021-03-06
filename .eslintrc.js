module.exports = {
  root: true,
  extends: [
    'eslint-config-digitalbazaar',
    'eslint-config-digitalbazaar/jsdoc'
  ],
  env: {
    node: true
  },
  ignorePatterns: ['dist/'],
  rules: {
    'jsdoc/check-examples': 'off'
  },
  globals: {
    globalThis: true
  }
};
