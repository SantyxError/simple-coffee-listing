import { html, css, LitElement } from 'lit';

export class Tag extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: var(--spacing-s) var(--spacing-l);
        background-color: var(--color-brand06);
        font-family: var(--font-family-label);
        border: unset;
        border-radius: var(--borderRadius-xl);
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
