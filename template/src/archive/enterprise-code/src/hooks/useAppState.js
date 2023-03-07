import {useState, useEffect} from 'react';
import {AppState} from 'react-native';

export const APP_STATE = {
  ACTIVE: 'active',
};

// Check if the app is Active or Runs in foreGround

const useAppState = () => {
  const [appState, setAppState] = useState(AppState.currentState);
  useEffect(() => {
    const handleAppStateChange = nextAppState => {
      setAppState(nextAppState);
    };

    try {
      AppState.addEventListener('change', handleAppStateChange);
    } catch (err) {
      console.error(err);
    }

    return () => {
      try {
        AppState?.removeEventListener('change', handleAppStateChange);
      } catch (err) {
        console.error(err);
      }
    };
  }, []);

  return appState;
};

export default useAppState;
