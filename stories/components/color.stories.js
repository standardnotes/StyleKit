import { h } from 'preact';

export default {
  title: 'Design System/Styles/Colors',
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'black',
          'grey-1',
          'grey-2',
          'grey-3',
          'grey-4',
          'grey-5',
          'grey-6',
          'danger',
        ],
      },
    },
  },
};

const Template = (args) => (
  <label className={`color-${args.variant}`}>{args.label}</label>
);

export const Info = Template.bind({});
Info.args = {
  label: 'Some Label',
  variant: 'info',
};
