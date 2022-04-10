import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  overflow-y: scroll;

  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.primaryBg};

  /* width */
  ::-webkit-scrollbar {
    width: 0.75rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.primaryLight};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.secondaryLight};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

export const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2.75rem;

  padding: 4rem;
  /* flex-wrap: wrap; */
  /* justify-content: space-around; */
`;
