import { TextInput, TextInputProps } from '@mantine/core';
import React from 'react';

interface CustomTextInputProps extends TextInputProps {
  // Add any additional custom props you need
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ ...props }) => {
  // Add your custom logic or features as needed
  const additionalStyles = {};

  return (
    <div>
      <TextInput {...props} style={additionalStyles} />
    </div>
  );
};

export default CustomTextInput;
