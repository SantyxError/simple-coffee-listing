import { html, LitElement } from 'lit';
import { cardsStyle } from './Cards.style.js';

export class Cards extends LitElement {
  static get styles() {
    return cardsStyle;
  }

  static get properties() {
    return {
      cards: { type: Array },
    };
  }

  constructor() {
    super();
    this.cards = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
      );
      const data = await response.json();
      this.cards = data;
      this.requestUpdate();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const image = 'src/assets/images/vector.svg';

    return html`
      <div class="cards-container">
        <img class="background-image" src="${image}" alt="Background Image" />
        <div class="info-wrapper">
          <text-component
            .text=${'Our Collection'}
            variant="bold"
            color="white"
            font-size="l"
          >
          </text-component>
          <text-component
            .text=${'Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.'}
            variant="bold"
            color="grey"
            font-size="m"
          >
          </text-component>
          <div class="buttons">
            <text-component
              class="productButton"
              .text=${'All Products'}
              variant="bold"
              color="white"
              font-size="m"
            >
            </text-component>
            <text-component
              class="availableButton"
              .text=${'Available Now'}
              variant="bold"
              color="white"
              font-size="m"
            >
            </text-component>
          </div>
        </div>
        <div class="card-list">
          ${this.cards.map(
            card => html` <card-component .coffee=${card}></card-component> `
          )}
        </div>
      </div>
    `;
  }
}
