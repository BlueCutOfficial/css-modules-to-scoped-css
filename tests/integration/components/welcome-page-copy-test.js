import { module, test } from 'qunit';
import { setupRenderingTest } from 'css-modules-to-scoped-css/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import styles from 'css-modules-to-scoped-css/components/welcome-page-copy.css';

module('Integration | Component | welcome-page-copy', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<WelcomePageCopy />`);
    assert.dom('#title').includesText('Congratulations, you made it!');
    assert.dom('#title').hasAttribute('class', styles['welcome-title']);
    assert.equal(
      styles['ember-orange'],
      'rgb(255, 92, 68)',
      'ember-orange color is imported',
    );
  });
});
