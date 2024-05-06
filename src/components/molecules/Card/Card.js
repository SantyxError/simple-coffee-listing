import { html, css, LitElement } from 'lit';

export class Card extends LitElement {
  static get styles() {
    return css`
      .card {
        position: relative;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        margin: 16px;
        width: 300px;
      }

      .tag-container {
        position: absolute;
        top: 10px;
        left: 10px;
      }

      img {
        width: 100%;
        height: auto;
      }

      .card-container {
        display: flex;
        padding: 16px;
        flex-direction: column;
        gap: var(--spacing-xs);
      }

      .card-title {
        margin: 0;
        font-size: 20px;
      }

      .card-text-valoration {
        display: flex;
        align-items: center;
      }

      .star {
        width: var(--fontSize-l);
        height: var(--fontSize-l);
      }

      .info-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .post-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `;
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
      return html`<div>No hay datos de café disponibles</div>`;
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
