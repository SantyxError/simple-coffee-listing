import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../Text';
import '../index';

describe('Text Component Tests', () => {
  it('can be instantiated', async () => {
    const el = await fixture(html`<text-component></text-component>`);
    expect(el).to.be.an.instanceOf(HTMLElement);
    expect(el).to.be.an.instanceOf(customElements.get('text-component'));
  });

  it('has the correct default properties', async () => {
    const el = await fixture(html`<text-component></text-component>`);
    expect(el.variant).to.equal('bold');
    expect(el.color).to.equal('white');
    expect(el.fontSize).to.equal('xs');
    expect(el.text).to.equal('');
  });

  it('updates properties via attributes', async () => {
    const el = await fixture(
      html`<text-component
        variant="bold"
        color="black"
        font-size="m"
        text="Hello"
      ></text-component>`
    );
    expect(el.variant).to.equal('bold');
    expect(el.color).to.equal('black');
    expect(el.getAttribute('font-size')).to.equal('m');
    expect(el.text).to.equal('Hello');
  });

  it('renders default slot content', async () => {
    const el = await fixture(
      html`<text-component text="Hello World"></text-component>`
    );
    expect(el.text).to.equal('Hello World');
    expect(el.shadowRoot.textContent).to.include('Hello World');
  });

  it('applies light styling correctly', async () => {
    const el = await fixture(
      html`<text-component variant="light"></text-component>`
    );
    const computedStyle = window.getComputedStyle(el);
    expect(computedStyle.getPropertyValue('font-weight')).to.equal('400');
  });

  it('updates rendered output when properties change', async () => {
    const el = await fixture(
      html`<text-component text="Initial"></text-component>`
    );
    expect(el.text).to.equal('Initial');
    el.text = 'Updated';
    await el.updateComplete;
    expect(el.shadowRoot.textContent).to.include('Updated');
  });
});
