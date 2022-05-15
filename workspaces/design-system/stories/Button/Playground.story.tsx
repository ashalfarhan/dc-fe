import { ComponentMeta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../../src';

const Template: Story<ButtonProps> = (args) => <Button {...args} ref={null} />;

export default {
  title: 'Playground/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Fill = Template.bind({});

Fill.args = {
  children: 'Fill',
  color: 'base',
  variant: 'fill',
};

export const Outline = Template.bind({});

Outline.args = {
  children: 'Outline',
  color: 'primary',
  variant: 'outline',
};

export const Text = Template.bind({});

Text.args = {
  children: 'Text',
  color: 'danger',
  variant: 'text',
};
