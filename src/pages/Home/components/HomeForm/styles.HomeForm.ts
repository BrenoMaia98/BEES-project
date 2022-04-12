import styled from 'styled-components';

export const Form = styled.form`
  .div-checkbox {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    p {
      margin: 0px;
    }
  }

  .error {
    display: block;

    font-size: 0.8em;
    font-weight: bold;
    color: red;

    margin-top: 0.05rem;
  }

  input[type='text'] {
    width: 100%;
    padding: 0.25rem;
    color: ${({ theme }) => theme.font.primaryBg};
  }
  input[type='checkbox'] {
    transform: scale(1.25);
    margin-right: 0.5rem;
  }

  .div-submit-button {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
  }
`;
