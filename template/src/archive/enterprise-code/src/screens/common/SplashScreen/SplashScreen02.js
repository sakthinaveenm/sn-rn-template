import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Loading from '../Loading';
import {APP_LOGO} from '@assets/images';

const SplashScreen02 = () => {
  const [isLoaded, setISLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setISLoaded(true);
    }, 2000);
  }, []);

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      logoImage={APP_LOGO}
      backgroundColor={'#262626'}
      logoHeight={150}
      logoWidth={150}>
      <Loading />
    </AnimatedSplash>
  );
};

export default SplashScreen02;
