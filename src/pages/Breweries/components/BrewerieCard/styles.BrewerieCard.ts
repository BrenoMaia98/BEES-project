import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  width: 100%;
  padding: 1.5rem;

  border: 0.05rem solid ${({ theme }) => theme.font.color};
  background-color: ${({ theme }) => theme.background2};
  color: ${({ theme }) => theme.font.primaryBg};

  .remove-icon {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    cursor: pointer;
    svg,
    &:hover {
      * {
        fill: red;
      }
    }
  }

  .tagsList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const TagDiv = styled.div`
  display: flex;
  align-items: center;

  /* width: 8rem; */
  padding: 0.25em 0.75rem;
  margin-top: 1rem;

  border-radius: 2rem;
  background-color: ${({ theme }) => theme.primary};

  svg {
    width: 1.15rem;
    height: 1.15rem;
  }

  span {
    margin-left: 0.5rem;
  }
`;
