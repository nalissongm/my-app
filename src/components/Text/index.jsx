import P from 'prop-types';

import * as Styled from './styles';

export const Text = ({
  children,
  size = 'huge',
  color = 'default',
  lineHeight = 'default',
}) => {
  return (
    <Styled.Heading size={size} color={color} lineHeight={lineHeight}>
      {children}
    </Styled.Heading>
  );
};

Text.propTypes = {
  children: P.node.isRequired,
  size: P.oneOf(['default', 'small', 'xsmall']),
  color: P.oneOf(['default', 'white']),
  lineHeight: P.oneOf(['default', 'spaced']),
};
