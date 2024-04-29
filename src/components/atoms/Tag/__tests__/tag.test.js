import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../Tag';

describe('Tag', () => {
  it('initializes the text property to an empty string in the constructor', async () => {
    const component = await fixture(html`<tag-component></tag-component>`);
    expect(component.text).to.equal(undefined);
  });

  it('can instantiate tag element with properties', async () => {
    const component = await fixture(
      html`<tag-component .text=${'irrelevantText'}></tag-component>`
    );

    expect(component.text).to.equal('irrelevantText');
  });

  it('updates the text property when it is changed', async () => {
    const component = await fixture(
      html`<tag-component .text=${'initialValue'}></tag-component>`
    );

    component.text = 'newValue';
    await component.updateComplete;

    expect(component.text).to.equal('newValue');
  });

  it('passes the a11y audit', async () => {
    const component = await fixture(html`<tag-component></tag-component>`);

    await expect(component).shadowDom.to.be.accessible();
  });
});
