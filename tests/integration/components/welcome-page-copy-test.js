import { module, test } from 'qunit';
import { setupRenderingTest } from 'css-modules-to-scoped-css/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import { scopedClass } from 'ember-scoped-css/test-support';

module('Integration | Component | welcome-page-copy', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<WelcomePageCopy />`);
    const rewrittenClass = scopedClass(
      'welcome',
      'css-modules-to-scoped-css/components/welcome-page-copy',
    );

    assert.dom('#welcome-id').includesText('Congratulations, you made it!');
    assert.dom('#welcome-id').hasAttribute('class', rewrittenClass);
  });
});
