import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

// useDimensions: A hook that can be used to easily get the dimensions of a component.
const useDimensions = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = result => {
      setDimensions(result.screen);
    };
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  return dimensions;
};

export default useDimensions;
