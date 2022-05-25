import { Button } from '@Components/Button';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
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
  label: 'Create note',
  variant: 'info'
};

export const Contrast = Template.bind({});
Contrast.args = {
  label: 'Create note',
  variant: 'contrast'
};

export const Neutral = Template.bind({});
Neutral.args = {
  label: 'Create note',
  variant: 'neutral'
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Create note',
  variant: 'warning'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Create note',
  variant: 'danger'
};

export const Success = Template.bind({});
Success.args = {
  label: 'Create note',
  variant: 'success'
};
