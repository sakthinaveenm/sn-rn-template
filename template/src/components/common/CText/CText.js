import {Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

const CText = ({children, style, ...props}) => {
  // console.log
  return (
    <Text
      {...props}
      style={{
        fontFamily: style?.fontFamily ?? EStyleSheet.value('$textFamily'),
        color: style?.color ?? EStyleSheet.value('$textColor'),
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default CText;
