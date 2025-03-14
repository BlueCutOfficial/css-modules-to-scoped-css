'use strict';

define("css-modules-to-scoped-css/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks, 'en-us'); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }
  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }
  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("css-modules-to-scoped-css/tests/integration/components/welcome-page-copy-test", ["qunit", "css-modules-to-scoped-css/tests/helpers", "@ember/test-helpers", "ember-scoped-css/test-support", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _testSupport, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"css-modules-to-scoped-css/tests/helpers",0,"@ember/test-helpers",0,"ember-scoped-css/test-support",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | welcome-page-copy', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <WelcomePageCopy />
      */
      {
        "id": "bXTuPfp8",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"welcome-page-copy\"]]",
        "moduleName": "/Users/marine/Desktop/Repos/opensource/BlueCutOfficial/css-modules-to-scoped-css/css-modules-to-scoped-css/tests/integration/components/welcome-page-copy-test.js",
        "isStrictMode": false
      }));
      const rewrittenClass = (0, _testSupport.scopedClass)('welcome', 'css-modules-to-scoped-css/components/welcome-page-copy');
      assert.dom('#welcome-id').includesText('Congratulations, you made it!');
      assert.dom('#welcome-id').hasAttribute('class', rewrittenClass);
    });
  });
});
define("css-modules-to-scoped-css/tests/test-helper", ["css-modules-to-scoped-css/app", "css-modules-to-scoped-css/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit/test-loader", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _testLoader, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"css-modules-to-scoped-css/app",0,"css-modules-to-scoped-css/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit/test-loader",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.setupEmberOnerrorValidation)();
  (0, _testLoader.loadTests)();
  (0, _emberQunit.start)();
});
define('css-modules-to-scoped-css/config/environment', [], function() {
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

require('css-modules-to-scoped-css/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
