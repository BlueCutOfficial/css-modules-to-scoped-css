'use strict';



;define("css-modules-to-scoped-css/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "css-modules-to-scoped-css/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"css-modules-to-scoped-css/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("css-modules-to-scoped-css/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("css-modules-to-scoped-css/components/footer", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <p class="{{local-class 'postscript' from='css-modules-to-scoped-css/components/welcome-page-copy.css'}}">
    To migrate from ember-css-module to ember-css-scoped, you will have to rename <code>local-class</code> to <code>class</code>, 
    and a couple of other things describes in the README.
  </p>
  */
  {
    "id": "txtIWfPh",
    "block": "[[[10,2],[15,0,[29,[[28,[37,1],[\"postscript\"],[[\"from\"],[\"css-modules-to-scoped-css/components/welcome-page-copy.css\"]]]]]],[12],[1,\"\\n  To migrate from ember-css-module to ember-css-scoped, you will have to rename \"],[10,\"code\"],[12],[1,\"local-class\"],[13],[1,\" to \"],[10,\"code\"],[12],[1,\"class\"],[13],[1,\", \\n  and a couple of other things describes in the README.\\n\"],[13]],[],false,[\"p\",\"local-class\",\"code\"]]",
    "moduleName": "css-modules-to-scoped-css/components/footer.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "footer"));
});
;define("css-modules-to-scoped-css/components/guides.css", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = {
    "guide": "_guide_11ep6i _guide_f42zxn"
  };
});
;define("css-modules-to-scoped-css/components/guides", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <p>You&rsquo;ve officially spun up your Ember app. You&rsquo;ve got one more decision to make: what do you want to do next? We&rsquo;d suggest one of the following to help you get going:</p>
  <ul>
    <li><a local-class="guide" href="https://guides.emberjs.com/release/getting-started/quick-start/">Quick Start</a> - a quick introduction to how Ember works. Learn about defining your first route, writing a UI component and deploying your application.</li>
    <li><a local-class="guide" href="https://guides.emberjs.com/release/tutorial/">Tutorial</a> - this is our more thorough, hands-on intro to Ember. Your crash course in Ember philosophy, background and some in-depth discussion of how things work (and why they work the way they do).</li>
  </ul>
  */
  {
    "id": "UV0kvA4D",
    "block": "[[[10,2],[12],[1,\"You’ve officially spun up your Ember app. You’ve got one more decision to make: what do you want to do next? We’d suggest one of the following to help you get going:\"],[13],[1,\"\\n\"],[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[10,3],[15,0,[29,[[28,[37,4],[\"guide\"],[[\"from\"],[\"css-modules-to-scoped-css/components/guides.css\"]]]]]],[14,6,\"https://guides.emberjs.com/release/getting-started/quick-start/\"],[12],[1,\"Quick Start\"],[13],[1,\" - a quick introduction to how Ember works. Learn about defining your first route, writing a UI component and deploying your application.\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[10,3],[15,0,[29,[[28,[37,4],[\"guide\"],[[\"from\"],[\"css-modules-to-scoped-css/components/guides.css\"]]]]]],[14,6,\"https://guides.emberjs.com/release/tutorial/\"],[12],[1,\"Tutorial\"],[13],[1,\" - this is our more thorough, hands-on intro to Ember. Your crash course in Ember philosophy, background and some in-depth discussion of how things work (and why they work the way they do).\"],[13],[1,\"\\n\"],[13]],[],false,[\"p\",\"ul\",\"li\",\"a\",\"local-class\"]]",
    "moduleName": "css-modules-to-scoped-css/components/guides.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "guides"));
});
;define("css-modules-to-scoped-css/components/welcome-page-copy.css", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = {
    "ember-orange": "rgb(255, 92, 68)",
    "ember-welcome-page-id-selector": "_ember-welcome-page-id-selector_f42zxn",
    "main": "_main_f42zxn",
    "guide": "_guide_f42zxn",
    "tomster": "_tomster_f42zxn",
    "welcome": "_welcome_f42zxn",
    "columns": "_columns_f42zxn",
    "postscript": "_postscript_f42zxn"
  };
});
;define("css-modules-to-scoped-css/components/welcome-page-copy", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!-- This component is initially copied from welcome-page.hbs 
  https://github.com/ember-cli/ember-welcome-page/blob/main/ember-welcome-page/src/components/welcome-page.hbs
  used to easily set up this demo. --}}
  
  <main id="ember-welcome-page-id-selector" local-class="main">
    <div local-class="columns">
      <div local-class="tomster">
        <img src="images/construction.png" alt="Under construction">
      </div>
      <div id="welcome-id" local-class="welcome">
        <h1 id="title">Congratulations, you made it!</h1>
  
        <Guides />
        <p>If you run into problems, please join <a local-class="guide" href="https://discord.gg/emberjs">our community's Discord server</a> or visit <a local-class="guide" href="http://discuss.emberjs.com/">our forums</a> for ideas and answers— our community is filled with friendly folks who are willing to help! We enjoy helping new Ember developers get started, and our <a local-class="guide" href="https://emberjs.com/community/">Ember Community</a> is incredibly supportive.</p>
      </div>
    </div>
    <p local-class="postscript">To remove this welcome message, remove the
      <code>
        &lt;WelcomePage /&gt;
      </code>
      component from your
      <code>
        app/templates/application.hbs
      </code>
      file and save it...you'll see this page update soon after!
    </p>
  </main>
  */
  {
    "id": "ELeXSruS",
    "block": "[[[1,\"\\n\"],[10,\"main\"],[15,0,[29,[[28,[37,1],[\"main\"],[[\"from\"],[\"css-modules-to-scoped-css/components/welcome-page-copy.css\"]]]]]],[14,1,\"ember-welcome-page-id-selector\"],[12],[1,\"\\n  \"],[10,0],[15,0,[29,[[28,[37,1],[\"columns\"],[[\"from\"],[\"css-modules-to-scoped-css/components/welcome-page-copy.css\"]]]]]],[12],[1,\"\\n    \"],[10,0],[15,0,[29,[[28,[37,1],[\"tomster\"],[[\"from\"],[\"css-modules-to-scoped-css/components/welcome-page-copy.css\"]]]]]],[12],[1,\"\\n      \"],[10,\"img\"],[14,\"src\",\"images/construction.png\"],[14,\"alt\",\"Under construction\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[15,0,[29,[[28,[37,1],[\"welcome\"],[[\"from\"],[\"css-modules-to-scoped-css/components/welcome-page-copy.css\"]]]]]],[14,1,\"welcome-id\"],[12],[1,\"\\n      \"],[10,\"h1\"],[14,1,\"title\"],[12],[1,\"Congratulations, you made it!\"],[13],[1,\"\\n\\n      \"],[8,[39,5],null,null,null],[1,\"\\n      \"],[10,2],[12],[1,\"If you run into problems, please join \"],[10,3],[15,0,[29,[[28,[37,1],[\"guide\"],[[\"from\"],[\"css-modules-to-scoped-css/components/welcome-page-copy.css\"]]]]]],[14,6,\"https://discord.gg/emberjs\"],[12],[1,\"our community's Discord server\"],[13],[1,\" or visit \"],[10,3],[15,0,[29,[[28,[37,1],[\"guide\"],[[\"from\"],[\"css-modules-to-scoped-css/components/welcome-page-copy.css\"]]]]]],[14,6,\"http://discuss.emberjs.com/\"],[12],[1,\"our forums\"],[13],[1,\" for ideas and answers— our community is filled with friendly folks who are willing to help! We enjoy helping new Ember developers get started, and our \"],[10,3],[15,0,[29,[[28,[37,1],[\"guide\"],[[\"from\"],[\"css-modules-to-scoped-css/components/welcome-page-copy.css\"]]]]]],[14,6,\"https://emberjs.com/community/\"],[12],[1,\"Ember Community\"],[13],[1,\" is incredibly supportive.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,2],[15,0,[29,[[28,[37,1],[\"postscript\"],[[\"from\"],[\"css-modules-to-scoped-css/components/welcome-page-copy.css\"]]]]]],[12],[1,\"To remove this welcome message, remove the\\n    \"],[10,\"code\"],[12],[1,\"\\n      <WelcomePage />\\n    \"],[13],[1,\"\\n    component from your\\n    \"],[10,\"code\"],[12],[1,\"\\n      app/templates/application.hbs\\n    \"],[13],[1,\"\\n    file and save it...you'll see this page update soon after!\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"main\",\"local-class\",\"div\",\"img\",\"h1\",\"guides\",\"p\",\"a\",\"code\"]]",
    "moduleName": "css-modules-to-scoped-css/components/welcome-page-copy.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)(undefined, "welcome-page-copy"));
});
;define("css-modules-to-scoped-css/data-adapter", ["exports", "@ember-data/debug/data-adapter"], function (_exports, _dataAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/data-adapter"eaimeta@70e063a35619d71f
});
;define("css-modules-to-scoped-css/helpers/app-version", ["exports", "@ember/component/helper", "css-modules-to-scoped-css/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"css-modules-to-scoped-css/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("css-modules-to-scoped-css/helpers/local-class", ["exports", "ember-css-modules/helpers/local-class"], function (_exports, _localClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _localClass.default;
    }
  });
  Object.defineProperty(_exports, "localClass", {
    enumerable: true,
    get: function () {
      return _localClass.localClass;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-css-modules/helpers/local-class"eaimeta@70e063a35619d71f
});
;define("css-modules-to-scoped-css/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("css-modules-to-scoped-css/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "css-modules-to-scoped-css/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"css-modules-to-scoped-css/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("css-modules-to-scoped-css/initializers/ember-data", ["exports", "@ember-data/request-utils/deprecation-support"], function (_exports, _deprecationSupport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/request-utils/deprecation-support"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("css-modules-to-scoped-css/initializers/ensure-local-class-included", ["exports", "ember-css-modules/templates/static-helpers-hack"], function (_exports, _staticHelpersHack) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-css-modules/templates/static-helpers-hack"eaimeta@70e063a35619d71f
  var _default = _exports.default = {
    initialize() {
      // This file exists to support Embroider's `staticHelpers` option.
      // ECM relies on the existence of a `local-class` helper, but that
      // helper may never be statically referenced in an application template.
      // Instead, we reference it in our own template, and then import that
      // template from a file (an initializer) that we know must always
      // be loaded in order to boot the app and/or run tests.
    }
  };
});
;define("css-modules-to-scoped-css/router", ["exports", "@ember/routing/router", "css-modules-to-scoped-css/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"css-modules-to-scoped-css/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {});
});
;define("css-modules-to-scoped-css/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("css-modules-to-scoped-css/services/store", ["exports", "@ember/debug", "ember-data/store"], function (_exports, _debug, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-data/store"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the store service. Use `export { default } from 'ember-data/store';` in app/services/store.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("css-modules-to-scoped-css/styles/app", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = {
    "ember-orange": "rgb(255, 92, 68)"
  };
});
;define("css-modules-to-scoped-css/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "From ember-css-modules to ember-scoped-css"}}
  
  <p class="about em-paragraph">A demo to migrate ember-css-modules to ember-scoped-css, setup using <a href="https://github.com/ember-cli/ember-welcome-page">ember-welcome-page</a>.</p>
  
  <WelcomePageCopy />
  
  <Footer />
  */
  {
    "id": "fnH1CQ5z",
    "block": "[[[1,[28,[35,0],[\"From ember-css-modules to ember-scoped-css\"],null]],[1,\"\\n\\n\"],[10,2],[14,0,\"about em-paragraph\"],[12],[1,\"A demo to migrate ember-css-modules to ember-scoped-css, setup using \"],[10,3],[14,6,\"https://github.com/ember-cli/ember-welcome-page\"],[12],[1,\"ember-welcome-page\"],[13],[1,\".\"],[13],[1,\"\\n\\n\"],[8,[39,3],null,null,null],[1,\"\\n\\n\"],[8,[39,4],null,null,null]],[],false,[\"page-title\",\"p\",\"a\",\"welcome-page-copy\",\"footer\"]]",
    "moduleName": "css-modules-to-scoped-css/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("css-modules-to-scoped-css/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from '@ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("css-modules-to-scoped-css/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from '@ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("css-modules-to-scoped-css/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from '@ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("css-modules-to-scoped-css/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from '@ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;

;define('css-modules-to-scoped-css/config/environment', [], function() {
  var prefix = 'css-modules-to-scoped-css';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("css-modules-to-scoped-css/app")["default"].create({"name":"css-modules-to-scoped-css","version":"0.0.0+ef3e884a"});
          }
        
//# sourceMappingURL=css-modules-to-scoped-css.map
