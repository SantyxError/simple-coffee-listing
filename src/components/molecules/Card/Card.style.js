import { css } from 'lit';

export const cardStyle = css`
  .card {
    position: relative;
    border-radius: var(--borderRadius-m);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: var(--spacing-m);
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
    padding: var(--spacing-m) 0;
    flex-direction: column;
    gap: var(--spacing-xs);
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
