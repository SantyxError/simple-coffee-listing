import { html } from 'lit';
import '../src/components/atoms/Tag';

export default {
  title: 'Tag',
  component: 'tag-component',
  argTypes: {
    text: { control: 'text' },
  },
};

function Template({ text = 'Popular' }) {
  return html` <tag-component .text=${text}></tag-component> `;
}

export const Regular = Template.bind({});
