import P from 'prop-types';
import { MenuLink } from '../MenuLink';
import * as Styled from './styles';

export const MenuNav = ({ dataLinks }) => {
  return (
    <Styled.Content>
      {dataLinks.map((data) => (
        <Styled.Wraper key={data.title}>
          <MenuLink link={data.link}>{data.title}</MenuLink>
        </Styled.Wraper>
      ))}
    </Styled.Content>
  );
};

MenuNav.propTypes = {
  dataLinks: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      link: P.string.isRequired,
    }),
  ).isRequired,
};
