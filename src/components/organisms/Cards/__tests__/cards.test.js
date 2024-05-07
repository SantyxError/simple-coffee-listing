import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../Cards';

describe('Cards', () => {
  skip('fetches coffee data and renders cards correctly', async () => {
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

    // Simulamos la respuesta de la solicitud fetch
    window.fetch = async () => {
      return {
        json: async () => mockData,
      };
    };

    const el = await fixture(html`<cards-component></cards-component>`);
    await new Promise(resolve => setTimeout(resolve, 3000)); // Espera 3 segundos

    const cards = el.shadowRoot.querySelectorAll('.card');
    expect(cards.length).to.equal(mockData.length);

    mockData.forEach((coffee, index) => {
      const card = cards[index];
      const coffeeName = card.querySelector('.card-title').textContent.trim();
      expect(coffeeName).to.equal(coffee.name);
    });
  }).timeout(5000);
});
