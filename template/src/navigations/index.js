import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from '@navigations/AuthNavigation';

import SplashScreen from '@screens/common/SplashScreen';
// import LoginScreen from '@screens/common/Auth/LoginScreen';
// import VideoPlayer from '@components/common/VideoPlayer';

const AppNavigation = () => {
  return <SplashScreen />;

  // return <NavigationContainer>{/* <AuthNavigation /> */}</NavigationContainer>;
};

export default AppNavigation;

const styles = StyleSheet.create({});
