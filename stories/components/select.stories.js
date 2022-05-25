import { Select } from '@Components/Select';

export default {
  title: 'Design System/Atoms/Select',
  component: Select,
  argTypes: {
    options: {
      table: {
        disable: true
      },
    },
    onChange: {
      action: 'changed'
    },
  },
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    {
      label: 'First option',
      value: 'first-option'
    },
    {
      label: 'Second option',
      value: 'second-option'
    },
    {
      label: 'Third option',
      value: 'third-option'
    },
  ],
};
