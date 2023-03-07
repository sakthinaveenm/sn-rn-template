import {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
// useNetInfo: A hook that can be used to check the device's internet connection
const useNetInfo = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return isConnected;
};

export default useNetInfo;
