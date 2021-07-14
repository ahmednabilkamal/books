import React from 'react';
import {TextInput} from 'react-native';

import Style from './Style';

const Input = ({value, onChange, placeholder}) => {
  return (
    <TextInput
      style={Style.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      keyboardType="numeric"
    />
  );
};

export default Input;
