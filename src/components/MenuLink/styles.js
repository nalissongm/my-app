import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.size.small};
    color: ${theme.colors.grayColor};
    padding: 1rem;
    position: relative;
    &:hover {
      color: ${theme.colors.primaryColor};
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 2px;
      background: ${theme.colors.primaryColor};
      transition: all 300ms ease-in-out;
    }
    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
