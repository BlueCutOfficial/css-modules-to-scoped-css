'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    cssModules: {
      extension: 'module.css',
      intermediateOutputPath: 'css-modules.css',
    },
    'ember-scoped-css': {
      passthrough: ['css-modules.css'],
      passthroughDestination: 'assets',
    },
  });

  return app.toTree();
};
