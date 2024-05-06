import { LitElement, html, css } from 'lit';

export class Cards extends LitElement {
  static get styles() {
    return css`
      .container {
        position: relative;
        font-family: var(--fontFamily-heading);
        background-color: var(--color-brand01);
        width: 1200px;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      .background-image {
        position: absolute;
        right: 350px;
        top: 30px;
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

      .title {
        font-size: 24px;
        font-weight: bold;
        margin: 0;
        color: var(--color-text);
      }

      .text_info {
        font-size: 16px;
        color: var(--color-text-secondary);
        margin-top: 10px;
        margin-bottom: 20px;
      }

      .buttons {
        display: flex;
        gap: 20px;
      }

      .productButton,
      .availableButton {
        padding: 10px 20px;
        background-color: var(--color-primary);
        color: white;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        font-size: m;
        font-weight: bold;
      }

      .productButton {
        background-color: var(--color-brand03);
      }

      .productButton:hover,
      .availableButton:hover {
        background-color: var(--color-primary-dark);
      }

      cards-component {
        flex: 1;
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
      <div class="container">
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
