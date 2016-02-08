'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb/base',
    'eslint-config-airbnb/rules/strict'
  ],
  ecmaFeatures: {
    'modules': false
  },
  rules: {
    'comma-dangle': 0,
    'strict': [2, 'global']
  }
};
