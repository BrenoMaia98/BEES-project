import styled, { css } from 'styled-components';

export const StylesInputText = styled.input<{ charCount: number }>`
  margin-left: 0.25rem;
  width: calc(
    4rem +
      ${({ charCount }) =>
        css`
          ${charCount * 0.4}rem
        `}
  );
  max-width: 15rem;
  /* background-color: blue; */
`;
