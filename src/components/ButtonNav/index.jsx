import P from 'prop-types';
import * as Styled from './styles';

export const ButtonNav = ({ children, negative = false }) => {
  return <Styled.Button negative={negative}>{children}</Styled.Button>;
};

ButtonNav.propTypes = {
  children: P.node.isRequired,
  negative: P.bool,
};
