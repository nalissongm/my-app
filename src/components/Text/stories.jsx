import { Text } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    children: 'Heading',
    size: 'huge',
    color: 'default',
  },
  argTypes: {
    children: { type: 'string' },
    size: {
      options: ['default', 'small', 'xsmall'],
      control: { type: 'radio' },
    },
    color: {
      options: ['default', 'white'],
      control: { type: 'radio' },
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <Text {...args} />
    </div>
  );
};
