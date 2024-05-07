import { html } from 'lit';
import '.';
export default {
  title: 'molecules/Cards',
  component: 'cards-component',
};

const mockData = [
  {
    id: 1,
    name: 'Cappuccino',
    image: 'https://example.com/cappuccino.jpg',
    price: '$5.99',
    rating: '4.5',
    votes: '100',
    available: true,
  },
  {
    id: 2,
    name: 'Latte',
    image: 'https://example.com/latte.jpg',
    price: '$4.99',
    rating: '4.3',
    votes: '80',
    available: true,
  },
  {
    id: 3,
    name: 'Espresso',
    image: 'https://example.com/espresso.jpg',
    price: '$3.99',
    rating: '4.8',
    votes: '120',
    available: false,
  },
];

export const Default = () => html`
  <cards-component .cards=${mockData}></cards-component>
`;
