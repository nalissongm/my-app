import P from 'prop-types';

import * as Styled from './styles';

export const Heading = ({ children, size = 'huge', color = 'default' }) => {
  return (
    <Styled.Heading size={size} color={color}>
      {children}
    </Styled.Heading>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  size: P.oneOf(['small', 'large', 'huge']),
  color: P.oneOf(['default', 'white']),
};
