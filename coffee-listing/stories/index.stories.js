import { html } from 'lit';
import '../coffee-listing.js';

export default {
  title: 'CoffeeListing',
  component: 'coffee-listing',
  argTypes: {
    header: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

function Template({ header = 'Hello world', counter = 5, textColor, slot }) {
  return html`
    <coffee-listing
      style="--coffee-listing-text-color: ${textColor || 'black'}"
      .header=${header}
      .counter=${counter}
    >
      ${slot}
    </coffee-listing>
  `;
}

export const Regular = Template.bind({});

export const CustomHeader = Template.bind({});
CustomHeader.args = {
  header: 'My header',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
