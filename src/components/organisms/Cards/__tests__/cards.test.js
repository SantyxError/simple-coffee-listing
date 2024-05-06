import { html } from 'lit';
import { fixture, expect, oneEvent } from '@open-wc/testing';
import '../Cards';

describe('Cards', () => {
  it('fetches coffee data and renders cards correctly', async () => {
    const mockData = [
      {
        id: 1,
        name: 'Cappuccino',
        image: 'https://example.com/cappuccino.jpg',
        price: '$5.99',
        rating: '4.5',
        votes: '100',
        available: true,
        popular: true,
      },
      {
        id: 2,
        name: 'Latte',
        image: 'https://example.com/latte.jpg',
        price: '$4.99',
        rating: '4.3',
        votes: '80',
        available: true,
        popular: false,
      },
      {
        id: 3,
        name: 'Espresso',
        image: 'https://example.com/espresso.jpg',
        price: '$3.99',
        rating: '4.8',
        votes: '120',
        available: false,
        popular: true,
      },
    ];

    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const response = new Response(JSON.stringify(mockData));
      return Promise.resolve(response);
    });

    const el = await fixture(html`<cards-component></cards-component>`);
    await el.updateComplete;

    const cards = el.shadowRoot.querySelectorAll('.card');
    expect(cards.length).to.equal(mockData.length);

    mockData.forEach((coffee, index) => {
      const card = cards[index];
      const coffeeName = card.querySelector('.coffee-name').textContent.trim();
      expect(coffeeName).to.equal(coffee.name);

      const image = card.querySelector('img');
      expect(image.src).to.equal(coffee.image);

      const price = card.querySelector('price-component').getAttribute('text');
      expect(price).to.equal(coffee.price);

      const rating = card
        .querySelector('.card-text-valoration')
        .textContent.trim();
      expect(rating).to.include(coffee.rating);

      const votes = card.querySelector('.card-votes').textContent.trim();
      expect(votes).to.include(coffee.votes);

      const availability = card
        .querySelector('.card-sold-text')
        .textContent.trim();
      if (coffee.available) {
        expect(availability).to.equal('Available');
      } else {
        expect(availability).to.equal('Sold out');
      }

      if (coffee.popular) {
        const tag = card.querySelector('tag-component');
        expect(tag).to.exist;
        expect(tag.textContent.trim()).to.equal('Popular');
      } else {
        const tag = card.querySelector('tag-component');
        expect(tag).to.not.exist;
      }
    });

    // Restore fetch method
    window.fetch.mockRestore();
  });
});
