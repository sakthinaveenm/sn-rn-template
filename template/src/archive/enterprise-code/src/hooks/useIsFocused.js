import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

// useIsFocused: A hook that can be used to determine if a screen is currently in focus
const IsFocused = () => {
  const [isFocused, setIsFocused] = useState(false);
  const navigationIsFocused = useIsFocused();

  useEffect(() => {
    setIsFocused(navigationIsFocused);
  }, [navigationIsFocused]);

  return isFocused;
};

export default IsFocused;
