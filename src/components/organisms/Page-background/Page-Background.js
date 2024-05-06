import { LitElement, html, css } from 'lit';

export class PageBackground extends LitElement {
  static get styles() {
    return css`
      .container {
        position: relative;
        height: 100vh;
        background-color: black;
        overflow: hidden;
        background-image: url('src/assets/images/bg-cafe.jpg');
        background-position-y: top;
        background-size: 100% auto;
        background-repeat: no-repeat;
      }

      .cards {
        position: absolute;
        top: 175px;
        left: 100px;
      }
    `;
  }

  static get properties() {
    return {
      image: { type: String },
    };
  }

  constructor() {
    super();
    this.image = 'src/assets/images/bg-cafe.jpg';
  }

  render() {
    const header = 'Our Collection';
    const text =
      'Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.';
    const productButton = 'All Products';
    const availableButton = 'Available Now';

    return html`
      <section class="container">
        <coffee-background
          class="cards"
          .header=${header}
          .text=${text}
          .productButton=${productButton}
          .availableButton=${availableButton}
        ></coffee-background>
      </section>
    `;
  }
}
