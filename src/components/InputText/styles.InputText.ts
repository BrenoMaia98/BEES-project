import styled, { css } from 'styled-components';

export const StylesInputText = styled.input<{
  charCount: number;
  customMaxWidth?: string;
  customMargin?: string;
}>`
  margin: ${({ customMargin }) => customMargin || '0px'};
  width: calc(
    4rem +
      ${({ charCount }) =>
        css`
          ${charCount * 0.4}rem
        `}
  );
  max-width: ${({ customMaxWidth }) => customMaxWidth || '22rem'};
  /* background-color: blue; */
`;
