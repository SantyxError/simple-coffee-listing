import { html } from 'lit';
import '.';

export default {
  title: 'atoms/Price',
  component: 'price-component',
  argTypes: {
    text: { control: 'text' },
  },
};

function Template({ text = '$5.20' }) {
  return html` <price-component .text=${text}></price-component> `;
}

export const Regular = Template.bind({});
