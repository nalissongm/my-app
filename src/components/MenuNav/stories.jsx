import { MenuNav } from '.';
import { dataLinks } from './mock';

export default {
  title: 'MenuNav',
  component: MenuNav,
  args: {
    dataLinks: dataLinks,
  },
  argTypes: {
    //dataLinks: { type: 'array' },
    dataLinks: {
      title: { type: 'string' },
      link: { type: 'string' },
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuNav {...args} />
    </div>
  );
};

// title: { type: 'string' },
// link: { type: 'string' },
