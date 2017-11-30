module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/legacy',
    './rules/node',
    './rules/style',
    './rules/legacy',
    './rules/es6',
    './rules/variables'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': 0,
    'global-require': 0,
    'no-new': 0,
    'func-names': 0,
    'vars-on-top': 0,
    'spaced-comment': 0,
    'no-param-reassign': 0,
    'space-before-function-paren': 0,
    'consistent-return': 0,
    'max-len': 0,
    'handle-callback-err': 2,
    'callback-return': [2, ['callback', 'cb', 'next', 'done', 'allDone']]
  }
};
