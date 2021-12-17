import { h } from 'preact';

export default {
  title: 'Design System/Styles/Colors',
  component: DemoComponent,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'info',
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

const DemoComponent = (args) => (
  <label className={`color-${args.variant}`}>{args.label}</label>
);

export const Info = DemoComponent.bind({});

Info.args = {
  label: 'Some Label',
  variant: 'info',
};

export const Grey3 = DemoComponent.bind({});

Grey3.args = {
  label: 'Some Label',
  variant: 'grey-3',
};