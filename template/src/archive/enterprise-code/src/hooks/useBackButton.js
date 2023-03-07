import {useState, useEffect} from 'react';
import {BackHandler} from 'react-native';

const useBackButton = callback => {
  useEffect(() => {
    const onBackPress = () => {
      callback();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [callback]);
};

export default useBackButton;
