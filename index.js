module.exports = {
  extends: [
    'airbnb'
  ],
  ecmaFeatures: {
    modules: false
  },
  rules: {
    'comma-dangle': 0,
    strict: 0,
    'global-require': 0,
    'no-new': 0,
    'func-names': 0,
    'vars-on-top': 0,
    'spaced-comment': 0,
    'no-param-reassign': 0,
    'space-before-function-paren': 0,
    'consistent-return': 0,
    'max-len': 0,
    'callback-return': [2, ['callback', 'cb', 'next', 'done', 'allDone']]
  }
};
