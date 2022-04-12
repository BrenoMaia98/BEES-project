import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  width: 100%;
  padding: 1.5rem;

  border: 0.05rem solid ${({ theme }) => theme.font.primaryBg};
  background-color: ${({ theme }) => theme.background2};
  /* color: ${({ theme }) => theme.font.primaryBg}; */
  color: ${({ theme }) => theme.darkTheme && theme.secondary};

  .remove-icon {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    cursor: pointer;

    * {
      fill: ${({ theme }) =>
        theme.darkTheme ? theme.secondary : theme.font.primaryBg};
    }

    &:hover {
      * {
        fill: red;
      }
    }
  }

  .card-info {
    margin: 1.5rem 0px;
  }

  .tagsList {
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
  }
`;

export const TagDiv = styled.div`
  display: flex;
  align-items: center;

  /* width: 8rem; */
  padding: 0.25em 0.75rem;
  margin-top: 0.75em;
  margin-right: 1.5em;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.primary};

  svg {
    width: 1.15rem;
    height: 1.15rem;
    * {
      stroke: ${({ theme }) =>
        theme.darkTheme ? theme.secondary : theme.font.primaryBg};
    }
  }

  span {
    margin-left: 0.5rem;
  }

  .hover {
    cursor: pointer;
  }
`;

export const RemoveableTagDiv = styled(TagDiv)`
  cursor: pointer;
  svg {
    path {
      stroke: unset !important;
    }
  }
  :hover {
    * {
      fill: red;
    }
  }
`;
