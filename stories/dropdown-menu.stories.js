/** @jsx h */
import { h } from 'preact';
import { DropdownMenu } from '@Components/DropdownMenu';

export default {
  title: 'DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    items: {
      table: {
        disable: true
      },
    },
  },
};

const Template = (args) => <DropdownMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Device',
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
