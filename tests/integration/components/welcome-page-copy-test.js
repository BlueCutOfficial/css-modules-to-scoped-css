import { module, test } from 'qunit';
import { setupRenderingTest } from 'css-modules-to-scoped-css/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | welcome-page-copy', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<WelcomePageCopy />`);
    assert.dom().includesText('Congratulations, you made it!');
  });
});
