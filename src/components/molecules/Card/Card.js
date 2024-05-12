import { html, LitElement } from 'lit';
import { cardStyle } from './Card.style';

export class Card extends LitElement {
  static get styles() {
    return cardStyle;
  }

  static get properties() {
    return {
      coffee: { type: Object },
    };
  }

  constructor() {
    super();
  }

  render() {
    if (!this.coffee) {
      return html`<p>No hay datos de café disponibles</p>`;
    }

    const starImage =
      this.coffee.votes > 0
        ? 'src/assets/images/Star_fill.svg'
        : 'src/assets/images/Star.svg';
    const rating = Number.isInteger(this.coffee.rating)
      ? this.coffee.rating.toFixed(1)
      : this.coffee.rating;
    const votesText =
      this.coffee.votes > 0 ? `(${this.coffee.votes} votes)` : 'No ratings';

    return html`
      <div class="card">
        ${this.coffee.popular
          ? html` <div class="tag-container">
              <tag-component .text=${'Popular'}></tag-component>
            </div>`
          : ''}
        <img src="${this.coffee.image}" alt="Card image" />

        <div class="card-container">
          <div class="info-wrapper">
            <text-component
              .text=${this.coffee.name}
              variant="bold"
              color="white"
              font-size="m"
            ></text-component>
            <price-component .text=${this.coffee.price}></price-component>
          </div>

          <div class="post-info">
            <div class="card-text-valoration">
              <img
                class="star"
                src="${starImage}"
                alt="Star"
                class="star-icon"
              />
              <text-component
                .text=${rating}
                variant="bold"
                color="white"
                font-size="m"
              ></text-component>
              <span class="card-votes"
                ><text-component
                  .text=${votesText}
                  variant="bold"
                  color="grey"
                  font-size="m"
                ></text-component
              ></span>
            </div>
            ${this.coffee.available
              ? ''
              : html`<div class="card-sold-text sold-out">
                  <text-component
                    .text=${'Sold out'}
                    color="orange"
                    variant="bold"
                    font-size="m"
                  ></text-component>
                </div>`}
          </div>
        </div>
      </div>
    `;
  }
}
