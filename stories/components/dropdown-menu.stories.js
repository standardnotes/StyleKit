/** @jsx h */
import { h } from 'preact';
import { DropdownMenu } from '@Components/DropdownMenu';
import { Icon } from '@Components/Icon';
import { SNComponentWrapper } from '../decorators';

export default {
  title: 'Design System/Atoms/DropdownMenu',
  component: DropdownMenu,
  decorators: [SNComponentWrapper],
  argTypes: {
    items: {
      table: {
        disable: true
      },
    },
    icon: {
      table: {
        disable: true
      },
    },
  },
};

const Template = (args) => <DropdownMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: <Icon name="text-rich" />,
  label: 'Rich text',
  items: [
    {
      label: 'Undo',
      value: 'undo',
      icon: <Icon name="undo" classList="mr-2" />
    },
    {
      label: 'Redo',
      value: 'redo',
      icon: <Icon name="redo" classList="mr-2" />
    },
    {
      label: 'Note history',
      value: 'note-history',
      icon: <Icon name="history" classList="mr-2" />
    },
  ],
};
