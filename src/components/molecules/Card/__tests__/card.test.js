import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../index';

describe('Card component', () => {
  it('renders with default values', async () => {
    const coffeeData = {
      name: 'Coffee Name',
      image: 'https://via.placeholder.com/300',
      price: '$5.99',
      rating: 4.5,
      votes: 100,
      available: true,
      popular: true,
    };

    const el = await fixture(
      html`<card-component .coffee=${coffeeData}></card-component>`
    );
    expect(el.shadowRoot.querySelector('.card')).to.exist;
  });
});
