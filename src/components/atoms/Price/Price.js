import { html, css, LitElement } from 'lit';

export class Price extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: var(--spacing-s) var(--spacing-m);
        background-color: var(--color-brand04);
        font-family: var(--font-family-label);
        font-weight: var(--fontWeight-900);
        border: unset;
        border-radius: var(--borderRadius-s);
      }
    `;
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
