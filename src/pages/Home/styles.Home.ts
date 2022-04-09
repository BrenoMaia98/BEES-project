import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
  height: 100vh;
  width: 100vw;

  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.font.primaryBg};
`;

export const LoginsContainer = styled.div`
  input[type='text'] {
    width: 100%;
    padding: 0.25rem;
    color: ${({ theme }) => theme.font.primaryBg};
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
