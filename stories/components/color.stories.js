import { h } from 'preact';
import { Button } from '@Components/Button';

export default {
  title: 'Design System/Styles/Colors',
  component: Button,
  argTypes: {
    onClick: {
      action: 'clicked'
    },
    variant: {
      control: {
        type: 'select',
        options: [
          "black",
          "grey-1",
          "grey-2",
          "grey-3",
          "grey-4",
          "grey-5",
          "grey-6",
          "danger",
          "success"
        ]
      }
    }
  },
};

const Template = (args) => <label className={`color-${args.variant}`} >Helloworld</label>;

export const Info = Template.bind({});
Info.args = {
  label: 'Create note',
  variant: 'info'
};
