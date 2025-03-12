import { module, test } from 'qunit';
import { setupRenderingTest } from 'css-modules-to-scoped-css/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Header />`);
    assert.dom().hasText('From ember-css-modules to ember-scoped-css');
  });
});
