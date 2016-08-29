# ESLint config

Server code should follow [this styleguide](https://github.com/airbnb/javascript) and use ES6 that's [shipping in node](https://nodejs.org/en/docs/es6/).

### Installation

`npm install --save-dev eslint-config-firstandthird`

Also make sure you install an [eslint integration](http://eslint.org/docs/user-guide/integrations) in your editor.

**NOTE**: Make sure you have the correct version of `eslint` installed:

  - `eslint`: ^3.4.0

### Usage

Create a `.eslintrc` in your project root with the following:

**Nodejs**
```json
{
  "extends": "firstandthird"
}
```
