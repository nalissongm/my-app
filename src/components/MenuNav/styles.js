import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    //align-items: center;
    //justify-content: space-between;
    //align-content: center;
  `}
`;

export const Wraper = styled.div`
  ${({ theme }) => css`
    padding: 0px 10.5px;
  `}
`;
