/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {LOADER_IMG} from '../../../assets/images';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Loading = () => {
  // styles
  const {container} = styles;
  return (
    <View style={container}>
      <Image
        source={LOADER_IMG}
        style={{
          width: 150,
          height: 150,
        }}
      />
    </View>
  );
};

export default Loading;
