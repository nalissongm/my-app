import { Menu } from '.';

import { dataMenu } from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    visible: false,
    dataMenu: dataMenu,
  },
  argTypes: {
    visible: { type: 'boolean' },
    dataMenu: { type: 'Object' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <Menu {...args} />
    </div>
  );
};
