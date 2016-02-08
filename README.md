# ESLint config

Server code should follow [this styleguide](https://github.com/airbnb/javascript) and use ES6 that's [shipping in node](https://nodejs.org/en/docs/es6/).

Browser modules should use the ES5 rules from the guide above.

### Installation

`npm install --save-dev eslint eslint-config-airbnb eslint-config-firstandthird`

Also make sure you install an [eslint integration](http://eslint.org/docs/user-guide/integrations) in your editor.

### Usage

Create a `.eslintrc` in your project root with the following:

**Nodejs**
```json
{
  "extends": "firstandthird"
}
```

**Browser**
```json
{
  "extends": "firstandthird/legacy"
}
```
