import styled, { css } from 'styled-components';

const setSize = (size) => {
  if (size == 'huge') return ({ theme }) => theme.font.size.huge;
  else if (size == 'large') return ({ theme }) => theme.font.size.large;
  else return ({ theme }) => theme.font.size.small;
};

const setColor = (color) => {
  if (color == 'default') return ({ theme }) => theme.colors.primaryColor;
  else return ({ theme }) => theme.colors.white100Color;
};

export const Heading = styled.h1`
  ${({ theme, size, color }) => css`
    font-size: ${setSize(size)};
    color: ${setColor(color)};
    font-family: ${theme.font.family.default};
  `}
`;
