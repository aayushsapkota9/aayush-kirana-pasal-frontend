import { Meta, StoryFn } from '@storybook/react';
import TextInput, { ITextInput } from './TextInput';
import { mockTextInputProps } from './TextInput.mocks';

export default {
  title: 'inputs/TextInput',
  component: TextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof TextInput> = (args) => <TextInput {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTextInputProps.base,
} as ITextInput;
