'use strict';

const CLIEngine = require('eslint').CLIEngine;
const expect = require('chai').expect;
const base = require('../index.js');

describe('core functionality', function() {
  it('can be loaded by eslint:', (done) => {
    const eslintEngine = new CLIEngine(base);
    done();
  });
  it('can be loaded and executed by eslint:', (done) => {
    const eslintEngine = new CLIEngine(base);
    const passReport = eslintEngine.executeOnText('const x = 5;');
    expect(typeof passReport.results[0].errorCount).to.equal('number');
    expect(typeof passReport.results[0].warningCount).to.equal('number');
    done();
  });
});

describe('firstandthird rules', function() {
  it('allows dangling commas (comma-dangle: 0)', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: false,
      rules: {
          'comma-dangle': base.rules['comma-dangle']
      }
    });
    const passReport = eslintEngine.executeOnText(`
'use strict';
var foo = {
  bar: "baz",
  quz: "quuz",
}`);
  expect(passReport.results[0].errorCount).to.equal(0);
  expect(passReport.results[0].warningCount).to.equal(0);
    done();
  });

  it('lets you put a require statement wherever you want (global-require: 0)', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: false,
      rules: {
          'global-require': base.rules['global-require']
      }
    });
    const passReport = eslintEngine.executeOnText(`
var foo = 1;
var theModule = require('./rules.test.js');
    `);
    expect(passReport.results[0].errorCount).to.equal(0);
    expect(passReport.results[0].warningCount).to.equal(0);
    done();
  });

  it('lets you use the "new" operator without assigning the outcome to a variable (no-new: 0)', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: false,
      rules: {
          'no-new': base.rules['no-new']
      }
    });
    const passReport = eslintEngine.executeOnText(`
var x = function(val){
  this.value = val;
};
new x(r);
    `);
    expect(passReport.results[0].errorCount).to.equal(0);
    expect(passReport.results[0].warningCount).to.equal(0);
    done();
  });

  it('lets you have anonymous functions with the "function" keyword (func-names: 0)', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: false,
      rules: {
          'func-names': base.rules['func-names']
      }
    });
    const passReport = eslintEngine.executeOnText(`
var x = function(){};
(function() {
}());
    `);
    expect(passReport.results[0].errorCount).to.equal(0);
    expect(passReport.results[0].warningCount).to.equal(0);
    done();
  });
  it('lets you declare variables anywhere, not just on top (vars-on-top: 0)', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: false,
      rules: {
          'vars-on-top': base.rules['vars-on-top']
      }
    });
    const passReport = eslintEngine.executeOnText(`
      function doSomething() {
          var first;
          if (true) {
              first = true;
          }
          var second;
      }

      // Variable declaration in for initializer:
      function doSomething() {
          for (var i=0; i<10; i++) {}
      }
    `);
    expect(passReport.results[0].errorCount).to.equal(0);
    done();
  });

  it('does not force you to use a whitespace after you start a comment (spaced-comment: 0)', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: false,
      rules: {
        'spaced-comment': base.rules['spaced-comment']
      }
    });
    const passReport = eslintEngine.executeOnText(`
      /*this violates the spaced-comment rule
      */
    `);
    expect(passReport.results[0].warningCount).to.equal(0);
    done();
  });

  it('allows you to re-assign function params (no-param-reassign: 0)', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: false,
      rules: {
        'no-param-reassign': base.rules['no-param-reassign']
      }
    });
    const passReport = eslintEngine.executeOnText(`
      function r(x) {
        x = "this violates the param reassignment rule";
      }
      r(5);
    `);
    expect(passReport.results[0].errorCount).to.equal(0);
    expect(passReport.results[0].warningCount).to.equal(0);
    done();
  });
  it('does not force you to have a whitespace after a function name (space-before-function-paren: 0,)', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: false,
      rules: {
        'space-before-function-paren': base.rules['space-before-function-paren']
      }
    });
    const passReport = eslintEngine.executeOnText(`
      function thisdoesnothaveaspaceaftertheparen(x) {
      }
    `);
    expect(passReport.results[0].errorCount).to.equal(0);
    expect(passReport.results[0].warningCount).to.equal(0);
    done();
  });

  it('allows you to mix statements that return a value and those that do not in the same function (consistent-return: 0,)', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: false,
      rules: {
        'consistent-return': base.rules['consistent-return']
      }
    });
    const passReport = eslintEngine.executeOnText(`
      function thisviolatestheconsistentreturnrule(x) {
        if (true) {
          return true;
        } else {
          return;
        }
      }
    `);
    expect(passReport.results[0].errorCount).to.equal(0);
    expect(passReport.results[0].warningCount).to.equal(0);
    done();
  });

  it('allows you to make lines as long as you want (max-len: 0,)', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: false,
      rules: {
        'max-len': base.rules['max-len']
      }
    });
    const passReport = eslintEngine.executeOnText(`
      var x = function thisissupposedtobeanextremelylongfunctionname(that, has, a) { var namethatisalsoabsurdlylong; };
    `);
    expect(passReport.results[0].errorCount).to.equal(0);
    expect(passReport.results[0].warningCount).to.equal(0);
    done();
  });

  it('if the first parameter of a callback is an "err", you *must* handle it (handle-callback-err: 2,)', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: false,
      rules: {
        'handle-callback-err': base.rules['handle-callback-err']
      }
    });
    const passReport = eslintEngine.executeOnText(`
      function loadData (err, data) {
        doSomething();
      }
    `);
    expect(passReport.results[0].errorCount).to.equal(1);
    expect(passReport.results[0].warningCount).to.equal(0);
    done();
  });

  it(`you must return when a callback is called (callback-return: [2, ['callback', 'cb', 'next', 'done', 'allDone']],)`, (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: false,
      rules: {
        'callback-return': base.rules['callback-return']
      }
    });
    const passReport = eslintEngine.executeOnText(`
      function oneError (callback) {
        callback();
        var x = 5;
      }
      function twoErrors (cb) {
        cb();
        var x = 5;
      }
      function threeErrors (next) {
        next();
        var x = 5;
      }
      function fourErrors (done) {
        done();
        var x = 5;
      }
      function fiveErrors (allDone) {
        allDone();
        var x = 5;
      }
      function notAnError (callback) {
        return callback();
        var x = 5;
      }

    `);
    expect(passReport.results[0].errorCount).to.equal(5);
    expect(passReport.results[0].warningCount).to.equal(0);
    done();
  });

  it('disallows nested ternary expressions (no-nested-ternary: 2)', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: true
    });
    const passReport = eslintEngine.executeOnText('const thing = foo ? bar : baz === qux ? quxx : foobar;');
    let found = false;
    passReport.results[0].messages.forEach((item) => {
      if (item.ruleId === 'no-nested-ternary') {
        found = true;
      }
    });
    expect(found).to.equal(true);
    done();
  });

  it('supports async/await syntax', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: true
    });
    const passReport = eslintEngine.executeOnText('const thing = async () => { };');
    let found = false;
    passReport.results[0].messages.forEach((item) => {
      if (item.message === 'Parsing error: Unexpected token =>') {
        found = true;
      }
    });
    expect(found).to.equal(false);
    done();
  });

  it('lets you use the import statement', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: true
    });
    const passReport = eslintEngine.executeOnText('import "chai"');
    let found = false;
    passReport.results[0].messages.forEach((item) => {
      if (item.message.indexOf('import') !== -1) {
        found = true;
      }
    });
    expect(found).to.equal(false);
    done();
  });

  it('requires "await" before an async function', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: true
    });
    const passReport = eslintEngine.executeOnText(`
const x = async () => 5;
x();
`);
    expect(passReport.results[0].messages[0].ruleId).to.equal('require-await');
    done();
  });

  it('async functions do not have "return await...."', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: true
    });
    const passReport = eslintEngine.executeOnText(`
const f1 = () => 5;
const f2 = async () => {
  const x = 5;
  const y = 5;
  return await f1(x, y);
};
f2();
`);
    expect(passReport.results[0].messages[0].ruleId).to.equal('no-return-await');
    done();
  });

  it('loops should not contain "await" expressions"', (done) => {
    const eslintEngine = new CLIEngine({
      envs: ['node', 'mocha'],
      useEslintrc: true
    });
    const passReport = eslintEngine.executeOnText(`
const f1 = () => 5;
const f2 = async () => {
  for (let i = 0; i < 5; i++) {
    await f1();
  }
};
f2();
`);
    expect(passReport.results[0].messages[0].ruleId).to.equal('no-await-in-loop');
    done();
  });

/*
'callback-return': [2, ['callback', 'cb', 'next', 'done', 'allDone']]
*/
});
