# css-modules-to-scoped-css

This repository serves as a demo to migrate from [ember-css-modules](https://github.com/salsify/ember-css-modules) to [ember-scoped-css](https://github.com/soxhub/ember-scoped-css).

## Motivation

The Ember community wants to bring Vite to Ember apps. As part of the [Ember Initiative](https://mainmatter.com/ember-initiative/) led by Mainmatter, the Ember Initiative team started an audit of the top 100 addons on [Ember Observer](https://emberobserver.com/). Are these addons compatible with modern Ember apps building with Vite? Do some of them require rework? Or even should they be abandonned in favor of a different solution?

[ember-css-modules](https://github.com/salsify/ember-css-modules) is a widely used addon that brings CSS modules to classic Ember apps. However, it was identified as an addon that should be replaced with a different solution before moving to `@embroider/vite`. The problem is that it relies too much on classic-world semantic, and new options came up to bring CSS modules to modern Ember apps.

This repository introduces one of these options: [ember-scoped-css](https://github.com/soxhub/ember-scoped-css). It gives an example of how to migrate a simple application from ember-css-modules to ember-scoped-css. Though it remains rather minimalist (it doesn't introduce any advanced plugin configuration that you can use with ember-css-modules), it tries to show an overwiew of ember-css-modules features and how you can achieve the same with ember-scoped-css.

### I want to start using CSS modules in my Ember Vite app, should I use ember-scoped-css?

Not necessarily, ember-scoped-css is not the only option. You could also follow [Vite documentation](https://vite.dev/guide/features#css-modules) directly or look into what the Ember community came up with. The advantage of ember-scoped-css is that it's quite similar to ember-css-modules in the way to structure the implementation, so it's a migration path we recommend to unblock your upgrade to Vite without changing drastically how your CSS is structured.

## Diff

The `6.2` classic app in this repository is inspired by [ember-welcome-page](https://github.com/ember-cli/ember-welcome-page). For the setup, a `<WelcomePageCopy />` component has been implemented directly in the application. Starting from there, I introduced changes that allow me to demo ember-css-modules features.

Then I migrated from ember-css-modules to ember-scoped-css:

✨ --- [**Click here to see the diff**](https://github.com/BlueCutOfficial/css-modules-to-scoped-css/compare/demo-ember-css-modules..demo-ember-scoped-css?diff=split&w=) --- ✨

![Screenshot of the demo app, inspired from ember-welcome-page component](./demo-screenshot.png)

In the sections below, we will go through an overview of the differences between both solutions. But first, let's see the main idea behind "CSS isolation" that both addons implement more or less the same way. 

## CSS isolation by class rename

If you are already aware of what "CSS isolation by class rename" means technically, you can skip this section.

ember-css-modules and ember-scoped-css are different, but they both work following the same general idea: "CSS isolation by class rename". To understand this approach, you can use two resources:

- The document [CSS Isolation](https://github.com/soxhub/ember-scoped-css/blob/main/docs/css-isolation.md) from ember-scoped-css repository.
- The article [Cookbook: migrate an existing Ember app to CSS modules](https://mainmatter.com/blog/2022/08/24/cookbook-ember-app-to-css-modules/) is a walkthrough to install ember-css-modules in an Ember application that used initially one global CSS file. It presents the introduction of CSS modules with a more "practical" angle that allow you to see clearly the "without / with" CSS modules.

To sum it up, ember-css-modules and ember-scoped-css both provide you ways to have your `custom-class` and a component's element renamed to `custom-class+sha` following an interpolation pattern. This way, this class becomes unique and applied only on this specific component. ember-css-modules rename the classes to `._custom-class_sha`, and ember-scoped-css rename the classes to `.custom-class_sha`, but let's not call this a difference.

There are a few major differences though that will force you to rework your code while migrating from one to the other.

## Walkthrough the diff

### 1. `local-class` _versus_ `class`

ember-css-modules introduces the attribute `local-class` has a marker that identifies scoped classes. In a template, it's your responsability as a developer to assign to `local-class` the scoped classes that you defined in the correcponding CSS module, and to assign to `class` the global classes.

In ember-scoped-css, you only use the attribute `class`. // TOTRY: assign a global class defined in app.css in a component

### 2. Tag selectors: global _versus_ local

ember-css-modules is designed to rename class selectors. It doesn't rename tag selectors like `div`, `p`, `img`, `a`... even when they are defined in the CSS module of a component. These selectors are bundled as is in the final style and therefore the style applies globally. In that way, using tag selectors in components when using ember-css-modules requires caution.

ember-scoped-css is a bit more intuitive on that field. The tag selectors are no longer global but scoped. When these selectors are used in the component's CSS, a class named after the `sha` is added to the corresponding DOM elements, and the syntax `selector.sha` is used CSS-side to scope the style only to the component. This way, tag selectors behave just like any class selector, which can bring clearness to the CSS module.

### 3. Id selectors: weird _versus_ global

### 4. Each CSS file is a CSS module _versus_ each component has its CSS module

### 5. Importing styles and properties _versus_ parent passes in to child

### 6. Classic cascading _versus_ providing layers


TODO:

- Fix the main paragraph margin
- Finalize README



### A quick look at the new browser-side CSS

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

Below or a few leads about what we can use instead.

#### `{{scoped-class}}` helper

In ember-scoped-css, we can pass a local class from the parent component to the child component using the `{{scoped-class}}` helper, which results in something similar to the former `{{local-class}}`, but the approach is still very different: the scoped class is passed in from the component that defines it (rather than any component can retrieve the scoped class from anywhere as long as the path is known), and since only components have their CSS scoped, we can't use that helper from outside a component (because outside a component we are not in a CSS module with scoped classes to pass in).

#### CSS variables

Instead of relying on `@values`, we can try to rework the styles with [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) (also called CSS variables) directly.

#### Managing layers

Note that, by default, ember-scoped-css emits the components CSS in a [CSS layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) `components`. The name of the layer is [configurable](https://github.com/soxhub/ember-scoped-css/blob/02488a40003923409ffc1ab3fdd1bd6bed7eddaf/README.md#configuration-1), and if you don't use layers at all you can disable this with `layerName: false`. 

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
