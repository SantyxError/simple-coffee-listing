import { html, LitElement } from 'lit';
import { tagStyle } from './Tag.style';

export class Tag extends LitElement {
  static get styles() {
    return tagStyle;
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
