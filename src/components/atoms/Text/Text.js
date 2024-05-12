import { html, LitElement } from 'lit';
import { textVariant, textColor, textSize } from './Text.style';

export class Text extends LitElement {
  static get styles() {
    return [textVariant, textColor, textSize];
  }

  static get properties() {
    return {
      variant: { type: String },
      color: { type: String },
      fontSize: { type: String, attribute: 'font-size' },
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.variant = 'bold';
    this.color = 'white';
    this.fontSize = 'xs';
    this.text = '';
  }

  render() {
    return html` ${this.text} `;
  }
}
