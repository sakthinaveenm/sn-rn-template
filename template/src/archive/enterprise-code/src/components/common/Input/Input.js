import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';

const CustomTextInput = props => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput
        style={props.style}
        value={value}
        onChangeText={text => setValue(text)}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        onBlur={() => props.onBlur(value)}
        onFocus={() => props.onFocus(value)}
      />
      <Text>{props.error}</Text>
    </View>
  );
};

export default CustomTextInput;
