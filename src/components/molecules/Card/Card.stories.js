import { html } from 'lit';
import '.';

export default {
  title: 'molecules/Card',
  component: 'card-component',
};

function Template() {
  const coffee = {
    id: 1,
    name: 'Cappuccino',
    image:
      'https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg',
    price: '$5.20',
    rating: 4.7,
    votes: 65,
    popular: true,
    available: true,
  };
  return html` <card-component .coffee=${coffee}></card-component> `;
}

export const Regular = Template.bind({});
Regular.args = {
  coffee: {
    id: 1,
    name: 'Cappuccino',
    image:
      'https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg',
    price: '$5.20',
    rating: 4.7,
    votes: 65,
    popular: true,
    available: true,
  },
};
