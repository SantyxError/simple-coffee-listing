import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../Price';

describe('Price', () => {
  it('should initialize the text property to an empty string in the constructor', async () => {
    const component = await fixture(html`<price-component></price-component>`);
    expect(component.text).to.equal(undefined);
  });

  it('should instantiate the price element with properties', async () => {
    const component = await fixture(
      html`<price-component .text=${'irrelevantText'}></price-component>`
    );
    expect(component.text).to.equal('irrelevantText');
  });

  it('should update the text property when it is changed', async () => {
    const component = await fixture(
      html`<price-component .text=${'initialValue'}></price-component>`
    );
    component.text = 'newValue';
    await component.updateComplete;
    expect(component.text).to.equal('newValue');
  });

  it('should pass the a11y audit', async () => {
    const component = await fixture(html`<price-component></price-component>`);
    await expect(component).shadowDom.to.be.accessible();
  });
});
