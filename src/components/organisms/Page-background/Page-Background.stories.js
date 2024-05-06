import { html } from 'lit';
import '.';

export default {
  title: 'organisms/PageBackground',
  component: 'page-background',
  argTypes: {
    image: { control: 'text' },
  },
};

const Template = ({ image }) => html`
  <page-background .image=${image}></page-background>
`;

export const Default = Template.bind({});
Default.args = {
  image: 'src/assets/images/bg-cafe.jpg',
};
