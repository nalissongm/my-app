import { ButtonNav } from '.';

export default {
  title: 'ButtonNav',
  component: ButtonNav,
  args: {
    children: 'ButtonNav',
    negative: false,
  },
  argTypes: {
    children: { type: 'string' },
    negative: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <ButtonNav {...args} />
    </div>
  );
};
