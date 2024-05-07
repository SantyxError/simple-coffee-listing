import { html, css, LitElement } from 'lit';

export class Text extends LitElement {
  static get styles() {
    return css`
      ${this.getVariant()}
      ${this.getColor()}
      ${this.getFontSize()}
    `;
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

  static getVariant() {
    return css`
      :host([variant='light']) {
        font-weight: var(--fontWeight-300);
      }

      :host([variant='bold']) {
        font-weight: var(--fontWeight-900);
      }
    `;
  }

  static getColor() {
    return css`
      :host([color='orange']) {
        color: var(--color-brand07);
      }

      :host([color='yellow']) {
        color: var(--color-brand06);
      }

      :host([color='white']) {
        color: var(--color-brand05);
      }

      :host([color='aquamarine']) {
        color: var(--color-brand04);
      }

      :host([color='grey']) {
        color: var(--color-brand03);
      }

      :host([color='black']) {
        color: var(--color-brand02);
      }

      :host([color='mateblack']) {
        color: var(--color-brand01);
      }
    `;
  }

  static getFontSize() {
    return css`
      :host([font-size='xxs']) {
        font-size: var(--fontSize-xxs);
      }

      :host([font-size='xs']) {
        font-size: var(--fontSize-xs);
      }

      :host([font-size='s']) {
        font-size: var(--fontSize-s);
      }

      :host([font-size='m']) {
        font-size: var(--fontSize-m);
      }

      :host([font-size='l']) {
        font-size: var(--fontSize-l);
      }
    `;
  }

  render() {
    return html` ${this.text} `;
  }
}
