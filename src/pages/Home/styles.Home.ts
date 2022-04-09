import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.primary};
  a {
    color: ${({ theme }) => theme.color};
  }

  svg {
    fill: ${({ theme }) => theme.color};
  }

  * {
    display: block;
    margin: 0.5rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color};
`;
