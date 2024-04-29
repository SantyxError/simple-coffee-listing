import { html } from 'lit';
import '.';

export default {
  title: 'atoms/Tag',
  component: 'tag-component',
  argTypes: {
    text: { control: 'text' },
  },
};

function Template({ text = 'Popular' }) {
  return html` <tag-component .text=${text}></tag-component> `;
}

export const Regular = Template.bind({});
