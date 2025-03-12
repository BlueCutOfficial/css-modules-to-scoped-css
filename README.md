# css-modules-to-scoped-css

This repository serves as a demo to migrate from [ember-css-modules](https://github.com/salsify/ember-css-modules) to [ember-scoped-css](https://github.com/soxhub/ember-scoped-css).

## Motivation


## Walkthrough

### Setup

I made this demo with a classic Ember app `6.2`. [[332ba22](https://github.com/BlueCutOfficial/css-modules-to-scoped-css/commit/332ba223aa8391001cfb16b43efeb9be901a18b5)]

For the setup, I used a copy of the component from [ember-welcome-page](https://github.com/ember-cli/ember-welcome-page). I removed the original `<WelcomePage />` component from the Ember app and replaced it with my `<WelcomePageCopy />`, which is a component defined directly in my application. [[6611e0e](https://github.com/BlueCutOfficial/css-modules-to-scoped-css/commit/6611e0eab76f1e2d96955274eb5d276b20eba776)]

Then I installed the addon ember-css-modules and get the copy of ember-welcome-page CSS to work with it. [[00fcf05](https://github.com/BlueCutOfficial/css-modules-to-scoped-css/commit/00fcf054c6153b2d407ccf0936c97c876fd0e1ff)]

A few more commits introduce ember-css-modules basic features. It doesn't introduce any advanced plugin configuration.

Note that ember-css-modules relies on local classes, the styles that apply to tag elements like `body`, `div`, `p`... remain global even if they are defined in the component's CSS. If you need a better understanding of this subtlety, you can have a look at the article [Cookbook: migrate an existing Ember app to CSS modules](https://mainmatter.com/blog/2022/08/24/cookbook-ember-app-to-css-modules/), which is quite old but still relevant to get explanations on that field.

### 1. Install ember-scoped-css for classic apps

Before moving to `@embroider/vite`, we need to get rid of ember-css-modules. Let's make ember-scoped-css work in the context of our classic app; only then we will start building with Vite and modify the configuration accordingly.

Let's install ember-scoped-css and the required dependency ember-scoped-css-compat:

```
pnpm add -D ember-scoped-css ember-scoped-css-compat
```

We don't need any further configuration in this demo, but [there are available options documented](https://github.com/soxhub/ember-scoped-css?tab=readme-ov-file#configuration-1).

Running the install is enough to break our styles. Let's see how to fix.

## Working with the repository

### Installation

- `git clone <repository-url>`
- `cd css-modules-to-scoped-css`
- `npm install`

### Running / Development

- `pnpm start`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

- `pnpm test`
- `pnpm test:ember -- --server`

### Linting

- `pnpm lint`
- `pnpm lint:fix`

### Building

- `pnpm exec ember build` (development)
- `pnpm build` (production)

### Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://cli.emberjs.com/release/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
