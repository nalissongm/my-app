import styled, { css } from 'styled-components';

const setSize = (size) => {
  if (size == 'default') return ({ theme }) => theme.font.size.xmedium;
  else if (size == 'small') return ({ theme }) => theme.font.size.small;
  else return ({ theme }) => theme.font.size.xsmall;
};

const setColor = (color) => {
  if (color == 'default') return ({ theme }) => theme.colors.black50Color;
  else return ({ theme }) => theme.colors.white75Color;
};

const setLineHeight = (lineHeight) => {
  return lineHeight == 'spaced' ? '30px' : 'auto';
};

export const Heading = styled.h1`
  ${({ theme, size, color, lineHeight }) => css`
    font-size: ${setSize(size)};
    color: ${setColor(color)};
    font-family: ${theme.font.family.default};
    font-weight: normal;
    line-height: ${setLineHeight(lineHeight)};
  `}
`;
