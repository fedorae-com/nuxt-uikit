# Nuxt [UIKit](https://github.com/uikit/uikit)

> [UIkit](https://github.com/uikit/uikit) is a lightweight and modular front-end framework for developing fast and powerful web interfaces

## Nuxt 2 Branch

This branch is for applications using Nuxt 2. The branch for Nuxt 3 is [fedorae-com/nuxt-uikit](https://github.com/fedorae-com/nuxt-uikit).

## Setup

1. Add `nuxt-uikit` dependency to your project

```bash
yarn add --dev nuxt-uikit # or npm install --save-dev nuxt-uikit
```

2. Add `nuxt-uikit` to the `buildModules` section of `nuxt.config.js`


:warning: If you are using Nuxt `< 2.9.0`, use `modules` instead.

```js
{
  buildModules: [
    // Simple usage
    'nuxt-uikit',
    // With options
    ['nuxt-uikit', { ssr: false }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) 2023 Fedorae