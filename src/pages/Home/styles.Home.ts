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

export const Logo = styled.img`
  color: ${({ theme }) => theme.font.primaryBg};
  max-height: 12em;
  max-width: 75vw;
`;
export const LoginsContainer = styled.div`
  margin-bottom: 10em;
  > p {
    margin: 0.75rem 0px;
  }
`;

export const AlignContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const BeeImg = styled.img`
  position: absolute;
  left: 0.5em;
  bottom: 0.5em;

  width: 12em;
`;
