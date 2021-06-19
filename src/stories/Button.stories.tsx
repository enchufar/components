import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from '../';
import type { ButtonProps } from '../'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    variant: { 
      options: ['filled', 'border', 'borderless'],
      control: 'inline-radio'
    }
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
  variant: 'filled'
};

