import { css } from 'lit';

export const cardsStyle = css`
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
