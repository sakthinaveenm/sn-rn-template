import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//  Not Working Properly

const useAsyncStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  const getValue = async () => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        setStoredValue(JSON.parse(value));
      } else {
        setStoredValue(initialValue);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setValue = async value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return {storedValue, setValue, getValue};
};

export default useAsyncStorage;
