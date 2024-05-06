import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Card } from '../Card';
import '../index';

describe('Card component', () => {
  let card;

  beforeEach(async () => {
    card = await fixture(html`<card-component></card-component>`);
  });

  it('renders coffee data correctly', async () => {
    const coffee = {
      name: 'Espresso',
      price: '$2.50',
      image: 'https://www.example.com/espresso.jpg',
      rating: 4.5,
      votes: 20,
      popular: true,
      available: true,
    };

    card.coffee = coffee;
    await card.updateComplete;

    const coffeeName = card.shadowRoot
      .querySelector('.coffee-name')
      .textContent.trim();
    const price = card.shadowRoot
      .querySelector('.card-container price-component')
      .textContent.trim();
    const rating = card.shadowRoot
      .querySelector('.card-text-valoration text-component')
      .textContent.trim();
    const votes = card.shadowRoot
      .querySelector('.card-votes text-component')
      .textContent.trim();

    expect(coffeeName).to.equal('Espresso');
    expect(price).to.equal('$2.50');
    expect(rating).to.equal('4.5');
    expect(votes).to.equal('(20 votes)');
  });

  it('renders "Sold out" if coffee is not available', async () => {
    const coffee = {
      name: 'Cappuccino',
      price: '$3.00',
      image: 'https://www.example.com/cappuccino.jpg',
      rating: 4.2,
      votes: 10,
      popular: false,
      available: false,
    };

    card.coffee = coffee;
    await card.updateComplete;

    const soldOutText = card.shadowRoot
      .querySelector('.card-sold-text')
      .textContent.trim();

    expect(soldOutText).to.equal('Sold out');
  });

  it('renders rating with one decimal if available', async () => {
    const coffee = {
      name: 'Latte',
      price: '$3.50',
      image: 'https://www.example.com/latte.jpg',
      rating: 5,
      votes: 0,
      popular: false,
      available: true,
    };

    card.coffee = coffee;
    await card.updateComplete;

    const rating = card.shadowRoot
      .querySelector('.card-text-valoration text-component')
      .textContent.trim();

    expect(rating).to.equal('5.0');
  });

  it('renders "No rating" if coffee has 0 votes', async () => {
    const coffee = {
      name: 'Mocha',
      price: '$4.00',
      image: 'https://www.example.com/mocha.jpg',
      rating: 0,
      votes: 0,
      popular: false,
      available: true,
    };

    card.coffee = coffee;
    await card.updateComplete;

    const votes = card.shadowRoot
      .querySelector('.card-votes text-component')
      .textContent.trim();

    expect(votes).to.equal('No ratings');
  });
});
