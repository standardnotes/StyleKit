/** @jsx h */
import { h } from 'preact';
import { Button } from '@Components/Button';
import { SNComponentWrapper } from '../decorators';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  decorators: [SNComponentWrapper],
  argTypes: {
    onClick: {
      action: 'clicked'
    },
    variant: {
      control: {
        type: 'select',
        options: [
          "contrast",
          "info",
          "neutral",
          "warning",
          "danger",
          "success"
        ]
      }
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Info = Template.bind({});
Info.args = {
  label: 'Button',
  variant: 'info'
};

export const Contrast = Template.bind({});
Contrast.args = {
  label: 'Button',
  variant: 'contrast'
};

export const Neutral = Template.bind({});
Neutral.args = {
  label: 'Button',
  variant: 'neutral'
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Button',
  variant: 'warning'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  variant: 'danger'
};

export const Success = Template.bind({});
Success.args = {
  label: 'Button',
  variant: 'success'
};
