'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-scoped-css': {
      layerName: false,
    },
  });

  return app.toTree();
};
