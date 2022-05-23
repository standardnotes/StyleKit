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
          'passive-1',
          'passive-2',
          'passive-3',
          'passive-4',
          'passive-5',
          'passive-6',
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

export const Passive3 = DemoComponent.bind({});

Passive3.args = {
  label: 'Some Label',
  variant: 'passive-3',
};