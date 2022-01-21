import P from 'prop-types';
import * as Styled from './styles';

import { LogoLink } from '../LogoLink';
import { MenuNav } from '../MenuNav';
import { ButtonNav } from '../ButtonNav';

export const Menu = ({
  visible = false,
  dataMenu: { dataLogo, dataLinks, dataButton },
}) => {
  return (
    <Styled.Content visible={visible}>
      <Styled.WraperLogo>
        <LogoLink dataLogo={dataLogo} />
      </Styled.WraperLogo>
      <Styled.WraperNav>
        <MenuNav dataLinks={dataLinks} />
        <Styled.WraperButton>
          <ButtonNav negative={dataButton.negative}>
            {dataButton.title}
          </ButtonNav>
        </Styled.WraperButton>
      </Styled.WraperNav>
    </Styled.Content>
  );
};

Menu.propTypes = {
  visible: P.bool,
  dataMenu: P.shape({
    dataLogo: P.array,
    dataLinks: P.array,
    dataButton: P.arrayOf(
      P.shape({
        negative: P.bool,
        title: P.string,
      }),
    ),
  }),
};
