import styled, { css } from 'styled-components';

const showBg = (visible) => css`
  ${visible
    ? ({ theme }) => css`
        background-color: ${theme.colors.bgHeaderColor};
      `
    : ''}
`;

export const Content = styled.header`
  ${({ theme, visible }) => css`
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 46px;
    ${showBg(visible)}
  `}
`;

export const WraperLogo = styled.div`
  ${({ theme }) => css`
    width: 133px;
  `}
`;

export const WraperNav = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
  `}
`;

export const WraperButton = styled.div`
  ${({ theme }) => css`
    width: 222px;
    margin-left: 15px;
  `}
`;
