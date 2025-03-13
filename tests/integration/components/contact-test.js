import { module, test } from 'qunit';
import { setupRenderingTest } from 'css-modules-to-scoped-css/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | contact', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Contact />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Contact>
        template block text
      </Contact>
    `);

    assert.dom().hasText('template block text');
  });
});
