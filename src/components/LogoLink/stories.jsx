import { LogoLink } from './';
import { dataLogo } from './mock';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    dataLogo: dataLogo,
  },
  argTypes: {
    //dataLinks: { type: 'array' },
    dataLogo: {
      title: { type: 'string' },
      url: { type: 'string' },
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <LogoLink {...args} />
    </div>
  );
};
