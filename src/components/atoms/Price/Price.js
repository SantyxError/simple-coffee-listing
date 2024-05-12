import { html, LitElement } from 'lit';
import { priceStyle } from './Price.style';

export class Price extends LitElement {
  static get styles() {
    return priceStyle;
  }

  static get properties() {
    return {
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.text = '';
  }

  render() {
    return html`${this.text}`;
  }
}
