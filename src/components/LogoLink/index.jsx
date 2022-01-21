import P from 'prop-types';

import * as Styled from './styles';

export const LogoLink = ({ dataLogo }) => {
  return (
    <Styled.Content>
      <Styled.Image
        src={dataLogo.url}
        alt={dataLogo.title}
        onClick={
          dataLogo.func
            ? dataLogo.func
            : () => {
                return;
              }
        }
      />
    </Styled.Content>
  );
};

LogoLink.propTypes = {
  dataLogo: P.shape({
    title: P.string.isRequired,
    url: P.string.isRequired,
    func: P.func,
  }),
};
