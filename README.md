<h1 align="center">First + Third - ESLint config</h1>

<p align="center">
  <a href="https://github.com/firstandthird/eslint-config-firstandthird/actions">
    <img src="https://img.shields.io/github/workflow/status/firstandthird/eslint-config-firstandthird/Test/main?label=Tests&style=for-the-badge" alt="Test Status"/>
  </a>
</p>

Our JavaScript styleguide is based off [the airbnb styleguide](https://github.com/airbnb/javascript). We support features in the latest node LTS release.

## Installation

```sh
npm install -D eslint eslint-plugin-import eslint-config-firstandthird
```

_or_

```sh
yarn add -D eslint eslint-plugin-import eslint-config-firstandthird
```

## Editor Setup
Make sure you install an [eslint integration](http://eslint.org/docs/user-guide/integrations) in your editor.

## Project Setup
Create a `.eslintrc` in your project root with the following:

```json
{
  "extends": "firstandthird"
}
```

---

<a href="https://firstandthird.com"><img src="https://firstandthird.com/_static/ui/images/safari-pinned-tab-62813db097.svg" height="32" width="32" align="right"></a>

_A [First + Third](https://firstandthird.com) Project_
