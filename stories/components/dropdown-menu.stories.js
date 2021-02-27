import { h } from 'preact';
import { DropdownMenu } from '@Components/DropdownMenu';
import { Icon } from '@Components/Icon';

export default {
  title: 'Design System/Atoms/DropdownMenu',
  component: DropdownMenu,
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
    onSelectItem: {
      action: 'clicked'
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
      icon: <Icon name="redo" classList="mr-2" />,
      onSelect: (value) => alert(`Item's onSelect callback triggered: ${value}`)
    },
    {
      label: 'Note history',
      value: 'note-history',
      icon: <Icon name="history" classList="mr-2" />
    },
  ],
};
