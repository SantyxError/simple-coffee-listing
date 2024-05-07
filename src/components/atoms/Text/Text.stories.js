import { html } from 'lit';
import '.';

export default {
  title: 'atoms/Text',
  component: 'text-component',
  argTypes: {
    variant: { control: 'variant' },
    color: { control: 'color' },
    fontSize: { control: 'fontSize' },
    text: { control: 'text' },
  },
};

const Template = ({
  variant = 'bold',
  color = 'light',
  fontSize = 'xs',
  text = 'example',
}) => html`
  <text-component
    variant=${variant}
    color=${color}
    font-size=${fontSize}
    text=${text}
  >
  </text-component>
`;

export const Regular = Template.bind({});
