import styled from 'styled-components';

export const StyledFeedback = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  background-color: #FFFDFA;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  .App-logo {
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h2 {
    color: #6D4C41;
    font-size: 28px;
    margin-bottom: 20px;
    border-bottom: 2px solid #D7CCC8;
    padding-bottom: 10px;
  }

  .feedback-managment {
    display: flex;
    justify-content: center;
  }

  button {
    background-color: #D7CCC8;
    color: #5D4037;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #BCAAA4;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .feedback-result {
    li {
      background-color: #EFEBE9;
      margin: 8px 0;
      padding: 12px 20px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
    }

    p {
      margin: 0;
      font-size: 18px;
    }
  }

  p {
    font-style: italic;
    color: #8D6E63;
    font-size: 18px;
    margin: 20px 0 0 0;
  }
`;