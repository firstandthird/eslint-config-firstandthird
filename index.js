'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb'
  ],
  ecmaFeatures: {
    'modules': false
  },
  rules: {
    'comma-dangle': 0,
    'strict': [2, 'global']
  }
};
