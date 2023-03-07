import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import globalStyles from '@constants/styles';

const Input = ({
  label,
  width,
  height,
  errorMessage,
  leftIcon,
  rightIcon,
  onChange,
  value,
  inputProps,
  isPassword,
  placeholder,
  txtContainerStyle,
  name,
}) => {
  const [showPasscode, setShowPasscode] = useState(false);
  const {row} = globalStyles;
  return (
    <View
      style={{
        width: width,
        height: height,
      }}>
      {label !== '' && <Text>{label}</Text>}
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...row,
          ...txtContainerStyle,
          alignItems: 'center',
        }}>
        <View style={{paddingRight: leftIcon ? 10 : 0}}>{leftIcon}</View>
        <View>
          <TextInput
            name={name}
            placeholder={placeholder}
            // onChangeText={onChange}
            onChangeText={onChange}
            value={value}
            {...inputProps}
          />
        </View>
        <View>
          {isPassword ? (
            <TouchableOpacity
              onPress={() => {
                setShowPasscode(!showPasscode);
              }}>
              {showPasscode ? <Fragment /> : <Fragment />}
            </TouchableOpacity>
          ) : (
            rightIcon
          )}
        </View>
      </View>
      <View>
        <Text>{errorMessage}</Text>
      </View>
    </View>
  );
};

Input.defaultProps = {
  label: '',
  value: '',
  errorMessage: '',
  onChange: () => {},
  placeholder: '',
  inputProps: {},
  txtContainerStyle: {},
  isPassword: false,
  width: '100%',
  height: '100%',
  leftIcon: <Fragment />,
  rightIcon: <Fragment />,
};

const styles = StyleSheet.create({});

export default Input;
