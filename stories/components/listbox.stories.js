import { h } from 'preact';
import { ListBox } from '@Components/ListBox';

export default {
  title: 'Design System/Atoms/ListBox',
  component: ListBox,
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

const Template = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    {
      label: 'First option',
      value: 'first-option'
    },
    {
      label: 'Second-option',
      value: 'second-option'
    },
    {
      label: 'Third option',
      value: 'third-option'
    },
  ],
};
