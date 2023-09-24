# Nuxt [UIKit](https://github.com/uikit/uikit)

> [UIkit](https://github.com/uikit/uikit) is a lightweight and modular front-end framework for developing fast and powerful web interfaces

## Nuxt 2 Docs

This docs is for applications using Nuxt 2. The docs for Nuxt 3 is [nuxt-uikit](https://nuxt-uikit.fedorae.com).

## Setup

1. Add `nuxt-uikit` dependency to your project

```bash
yarn add --dev nuxt-uikit # or npm install --save-dev nuxt-uikit or pnpm install -D nuxt-uikit
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
2. Install dependencies using `yarn install` or `npm install` or `pnpm install`
3. Start development server using `yarn dev` or `npm run dev` or `pnpm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) 2023 Fedorae