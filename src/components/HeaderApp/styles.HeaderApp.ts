import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;

  top: 0px;

  padding: 0.5em 0.5rem;
  z-index: 10;

  background-color: ${({ theme }) => theme.primary};
  -webkit-box-shadow: 0px 0px 1rem 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 1rem 0px rgba(0, 0, 0, 0.3);

  a {
    text-decoration: none;
  }

  .go-back-div {
    display: flex;
    align-items: center;
    svg {
      width: 1.5rem;
      margin-right: 0.25rem;
    }
    span {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${({ theme }) => theme.secondary};
    }
  }

  h3 {
    margin: 0px;
  }
`;
