import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

// useOrientation: A hook that can be used to determine the device's current screen orientation
const useOrientation = () => {
  const [orientation, setOrientation] = useState(
    Dimensions.get('screen').width > Dimensions.get('screen').height
      ? 'landscape'
      : 'portrait',
  );

  useEffect(() => {
    const onChange = ({screen}) => {
      setOrientation(screen.width > screen.height ? 'landscape' : 'portrait');
    };

    Dimensions.addEventListener('change', onChange);

    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  return orientation;
};

export default useOrientation;
