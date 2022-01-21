import styled, { css } from 'styled-components';

const negativeBttn = (negative) => css`
  ${negative
    ? ({ theme }) => css`
        border: 2.5px solid ${theme.colors.primaryColor};
        background-color: transparent;
        color: ${theme.colors.primaryColorButton};
        cursor: pointer;
        &:hover {
          border: none;
          background-color: ${theme.colors.primaryColor};
          color: ${theme.colors.white100Color};
        }
      `
    : ({ theme }) => css`
        border: none;
        background-color: ${theme.colors.primaryColor};
        color: ${theme.colors.white100Color};
        cursor: pointer;
        &:hover {
          background-color: ${theme.colors.primaryHoverColor};
        }
      `}
`;

export const Button = styled.button`
  ${({ theme, negative }) => css`
    width: 100%;
    height: 40px;
    font-size: ${theme.font.size.medium};
    font-weight: 400;
    letter-spacing: 0.05em;
    border-radius: 5px;
    ${negativeBttn(negative)}
  `}
`;
