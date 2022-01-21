import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    cursor: pointer;
  `}
`;
