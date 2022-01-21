import { Heading } from './';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Heading',
    size: 'huge',
    color: 'default',
  },
  argTypes: {
    children: { type: 'string' },
    size: {
      options: ['small', 'large', 'huge'],
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
      <Heading {...args} />
    </div>
  );
};
