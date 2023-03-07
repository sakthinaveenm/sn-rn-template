import {View, Text, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {APP_LOGO} from '@assets/images';
const SplashScreen = () => {
  const {header, subHeader, container} = styles;

  return (
    <View style={container}>
      <View>
        <View style={container}>
          <Image source={APP_LOGO} />
          <Text style={header}>AAA</Text>
          <Text style={subHeader}>AAA</Text>
          <View
            style={{
              margin: 10,
            }}>
            <ActivityIndicator size="large" color="#FF5733" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
