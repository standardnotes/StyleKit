/** @jsx h */
import { h } from 'preact';
import { DropdownMenu } from '@Components/DropdownMenu';
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
  icon: (<span>📋</span>),
  label: 'Rich text',
  items: [
    {
      label: 'iOS',
      value: 'ios',
      icon: <span>🍏</span>
    },
    {
      label: 'Android',
      value: 'android',
      icon: <span>🤖</span>
    },
    {
      label: 'macOS',
      value: 'macos',
      icon: <span>💻</span>
    },
    {
      label: 'Windows',
      value: 'windows',
      icon: <span>🖥️</span>
    },
    {
      label: 'Linux',
      value: 'linux',
      icon: <span>🐧</span>
    },
    {
      label: 'Web app',
      value: 'webapp',
      icon: <span>🌐</span>
    },
  ],
};
