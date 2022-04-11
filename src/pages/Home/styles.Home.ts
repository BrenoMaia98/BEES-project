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
