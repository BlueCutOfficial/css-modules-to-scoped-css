# css-modules-to-scoped-css

This repository serves as a demo to migrate from [ember-css-modules](https://github.com/salsify/ember-css-modules) to [ember-scoped-css](https://github.com/soxhub/ember-scoped-css).

## Motivation


## Walkthrough

The idea of this walkthrough is to setup a demo project with ember-css-modules and migrate it to ember-scoped-css. You can use the steps below and the commit stack of the repo to apply the same process to your application.

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

### 2. A quick look at the new browser-side CSS

The install is enough to break our styles because ember-scoped-css starts doing things with our component CSS.

Let's run the Ember dev server and visit http://localhost:4200/. From the developer console's inspector, we can inspect any element styles and click on the file name at the top right of the style panel; here, I am looking for "css-modules-to-scoped-css.css" file. This links us to that CSS file content (the tab of the developer console can be different depending on what browser we are using.) The snippet below is a selected extract of what we can see using this demo project:

```css
@value ember-orange from 'css-modules-to-scoped-css/styles/app';

img.eb52dde03 {
  max-width: 100%;
}
p.eb52dde03 {
  font-size: 1.25em;
  margin: 0 0 .75em;
}
.welcome-title_eb52dde03 {
  composes: secondary-title from 'css-modules-to-scoped-css/styles/app';
  color: ember-orange;
}

body {
  color: rgb(28, 30, 36);
  background: rgb(244, 246, 248);
  font-family: "Inter var","Inter web",-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  font-size: 18px;
  font-weight: 200;
  line-height: 1.5;
  margin: 0 auto;
  padding: 0;
}

h1, .title {
  font-size: 2.5em;
  font-weight: 200;
  line-height: 1.2;
  margin-top: 0;
}
```

It's similar to what ember-css-modules was doing; the pattern to make the selectors unique is now `class-name_sha` instead of `_class-name_sha`, but let's not call this a difference.

There are two actual differences however that make the scoping awesomely more intuitive (in my opinion):

- The tag elements (`img`, `p`, `a`...) are no longer global but scoped. When these selectors are used in the component's CSS, then a class `sha` is added to them in the DOM, and the syntax `p.sha` is used CSS-side to scope the style only to the component. This way, tag selectors behave just like any class selector.

- The style that is no defined in components (e.g. `app/styles/app.css`) is no longer transformed with the local selectors. Not a component, not a CSS module, just regular global CSS, which is handy to style the main layout of the app. We no longer need to use `:global` everywhere in `app.css`, we can use it only in components when we want to set a particular style as "global despite being defined at a component level".

### 3. Sort out `:global` pseudo-selectors

Before doing anything else, remove the `:global` pseudo-selector everywhere it's not needed, and eventually add it on component-side if you used to rely on the fact tag selectors were applied globally. It might be an opportunity to clean-up this part and put each style where it belongs.

### 4. Back to `class`

For now, ember-scoped-css generates `sha` classes correctly on tag selectors, but everywhere we use a `local-class`, it results to `class=""` in the DOM. ember-scoped-css doesn't introduce such a special attribute. Instead, we simply use the regular attribute `class`. Putting all `local-class` back to `class` is enough to get ember-scoped-css out of its deep incomprehension, and it now assigns the unique classes correctly to the DOM elements.

### 5. Replace emmber-css-modules specific features

- `{{local-class}}` helper was used to import a local class from another CSS module directly in the template.
- composes was used to get a local class inherit from another local class that could be located in another CSS module.
- `@value` was used to import a CSS variable that could be located in another CSS module. 

All of these features are based on the same idea: given the path to a CSS module, the content of this CSS module can be imported in another CSS module. Phrased this way, the approach doesn't sound that different from importing js modules in our code files, but when coming to CSS, one could say it opens a door to implementations that forget what a CSS module was initially supposed to be. This approach no longer exists in ember-scoped-css.

What we can do in ember-scoped-css, though, is passing a local class from the parent component to the child component using the `{{scoped-class}}` helper, which results in something similar, but the approach is still very different: the scoped class is passed in from the component that defines it (rather than any component can retrieve the scoped class from anywhere as long as the path is known), and since only components have their CSS scoped, you can't use that helper from outside a component (because outside a component we are not in a CSS module with scoped classes to pass in).

Whatever the way we decide to refactor this, CSS features can be helpful ([layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer), [variables](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)...)

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
