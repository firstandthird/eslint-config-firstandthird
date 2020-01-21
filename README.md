# ESLint config

![npm](https://img.shields.io/npm/v/eslint-config-firstandthird.svg) [![Build Status](https://travis-ci.org/firstandthird/eslint-config-firstandthird.svg?branch=master)](https://travis-ci.org/firstandthird/eslint-config-firstandthird)

Server code should follow [this styleguide](https://github.com/airbnb/javascript) and use ES6 that's [shipping in node](http://node.green).

### Installation

```sh
npm install
```

Also make sure you install an [eslint integration](http://eslint.org/docs/user-guide/integrations) in your editor.

**NOTE**: Make sure you have the correct version of `eslint` installed:

  - `eslint`: ^4.0.0

### Usage

Create a `.eslintrc` in your project root with the following:

**Nodejs**
```json
{
  "extends": "firstandthird"
}
```
