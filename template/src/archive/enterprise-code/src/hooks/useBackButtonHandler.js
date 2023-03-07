import {useEffect} from 'react';
import {BackHandler} from 'react-native';

// useBackButtonHandler: A hook that can be used to handle the back button press on Android.
// eg : useBackButtonHandler(() => Alert.alert('Hello'));

const useBackButtonHandler = callback => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      callback,
    );

    return () => {
      try {
        backHandler.remove();
      } catch (error) {}
    };
  }, [callback]);
};

export default useBackButtonHandler;
