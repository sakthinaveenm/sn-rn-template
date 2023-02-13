import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';

const Input = ({
  title,
  onChangeText,
  autoFocus,
  placeholder,
  errMessage,
  inputStyle,
  containerStyle,
}) => {
  // styles
  const {container, input} = styles;

  return (
    <View style={{...container, ...containerStyle}}>
      <Text>{title}</Text>
      <TextInput
        style={{...input, ...inputStyle}}
        autoFocus={autoFocus}
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
      />
      <Text>{errMessage}</Text>
    </View>
  );
};

Input.defaultProps = {
  title: '',
  placeholder: '',
  errMessage: '',
  autoFocus: false,
  onChangeText: () => {},
  inputStyle: {},
  containerStyle: {},
};

export default Input;
