import { html, css, LitElement } from 'lit';

export class Price extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: var(--spacing-xs) var(--spacing-s);
        background-color: var(--color-brand04);
        font-weight: var(--fontWeight-900);
        font-size: var(--fontSize-s);
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
