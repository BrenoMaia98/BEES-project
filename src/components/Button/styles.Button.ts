import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  border: 0px solid black;

  cursor: pointer;
`;
export const Title = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.font.secondaryBg};
`;
