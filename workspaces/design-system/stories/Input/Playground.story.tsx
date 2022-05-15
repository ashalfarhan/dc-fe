import { ComponentMeta, Story } from '@storybook/react';
import { Input, InputProps } from '../../src';

const Template: Story<InputProps> = (args) => <Input {...args} ref={null} />;

export default {
  title: 'Playground/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default = Template.bind({});

export const Multiline = Template.bind({});

Multiline.args = {
  multiline: true,
};
