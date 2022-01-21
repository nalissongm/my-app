import { Menu } from '../../components/Menu';
import { dataMenu } from '../../components/Menu/mock';

import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Content>
      <Menu dataMenu={dataMenu} visible />
    </Styled.Content>
  );
};
