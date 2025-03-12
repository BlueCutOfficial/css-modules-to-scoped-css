# css-modules-to-scoped-css

This repository serves as a demo to migrate from [ember-css-modules](https://github.com/salsify/ember-css-modules) to [ember-scoped-css](https://github.com/soxhub/ember-scoped-css).

## Motivation


## Walkthrough

### Setup

I made this demo with a classic Ember app `6.2`.

For the setup, I used a copy of the component from [ember-welcome-page](https://github.com/ember-cli/ember-welcome-page). I removed the original `<WelcomePage />` component from the Ember app and replaced it with my `<WelcomePageCopy />`, which is a component defined directly in my application.

Then I installed the addon ember-css-modules and get the copy of ember-welcome-page CSS to work with it.


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
