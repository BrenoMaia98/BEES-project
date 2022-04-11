import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  flex: 1;
  height: 100vh;
  width: 100vw;

  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.font.primaryBg};

  .toggle-theme-switch {
    position: absolute;
    right: 0.5em;
    top: 0.5em;
  }
`;

export const LoginsContainer = styled.div`
  > p {
    margin: 0.75rem 0px;
  }
`;

export const HomeForm = styled.form`
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

export const Title = styled.h1`
  color: ${({ theme }) => theme.font.primaryBg};
  position: absolute;
  top: 12.5%;
`;

export const BeeImg = styled.img`
  position: absolute;
  left: 0.5em;
  bottom: 0.5em;

  width: 12em;
`;
