import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link }) => {
  return <Styled.Container href={link}>{children}</Styled.Container>;
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string,
};
