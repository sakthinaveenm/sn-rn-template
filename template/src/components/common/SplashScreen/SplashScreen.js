/* eslint-disable react/react-in-jsx-scope */
import {Fragment, useEffect, useState} from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Loading from '../Loading';
import {SPLASH_SCREEN_IMG} from '@assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CText from '../CText/CText';
import {View} from 'react-native';
import {POWERED_BY} from '@config';

const SplashScreen = ({SplashImg}) => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Fragment>
      <AnimatedSplash
        translucent={true}
        isLoaded={isLoaded}
        logoImage={SPLASH_SCREEN_IMG}
        backgroundColor={'#FFFFFF'}
        logoHeight={wp('35%')}
        logoWidth={hp('35%')}>
        <Loading />
      </AnimatedSplash>

      {!isLoaded && POWERED_BY && POWERED_BY !== '' && (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingVertical: 15,
          }}>
          <CText>Powered By {POWERED_BY}</CText>
        </View>
      )}
    </Fragment>
  );
};

export default SplashScreen;
