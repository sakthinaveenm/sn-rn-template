/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Loading from '@screens/common/Loading';
import {SPLASH_SCREEN_IMG} from '@assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SplashScreen = ({SplashImg}) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      logoImage={SPLASH_SCREEN_IMG}
      backgroundColor={'#FFFFFF'}
      logoHeight={wp('35%')}
      logoWidth={hp('35%')}>
      <Loading />
    </AnimatedSplash>
  );
};

export default SplashScreen;
