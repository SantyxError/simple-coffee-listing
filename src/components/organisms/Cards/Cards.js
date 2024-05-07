import { LitElement, html, css } from 'lit';

export class Cards extends LitElement {
  static get styles() {
    return css`
      .cards-container {
        position: relative;
        font-family: var(--fontFamily-heading);
        background-color: var(--color-brand01);
        width: 1200px;
        padding: var(--spacing-l);
        padding-bottom: var(--spacing-5xl);
        border-radius: var(--borderRadius-m);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 200px;
      }

      .background-image {
        position: absolute;
        right: 375px;
        top: var(--spacing-xxl);
      }

      .info-wrapper {
        width: 500px;
        text-align: center;
        line-height: var(--spacing-l);
        padding: var(--spacing-l);
        margin-top: var(--spacing-4xl);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-m);
        position: relative;
        z-index: 1;
      }

      .buttons {
        display: flex;
        gap: var(--spacing-l);
      }

      .productButton,
      .availableButton {
        padding: var(--spacing-s) var(--spacing-m);
        background-color: var(--color-primary);
        color: var(--color-brand05);
        border-radius: var(--borderRadius-s);
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .productButton {
        background-color: var(--color-brand03);
      }

      .productButton:hover,
      .availableButton:hover {
        background-color: var(--color-primary-dark);
      }

      .card-list {
        display: grid;
        grid-template-columns: repeat(3, 300px);
        justify-content: center;
        gap: var(--spacing-l);
      }
    `;
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
