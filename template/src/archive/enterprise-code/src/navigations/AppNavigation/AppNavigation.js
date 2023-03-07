// inbuild
import React, {useEffect} from 'react';

// Navigation Npm Packages
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// Navigation Routes
import AuthNavigation from '@navigations/AuthNavigation';
// import HomeNavigation from '@navigations/HomeNavigation';

// Screens
import SplashScreen from '@screens/common/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

// constants
// import {TOKEN, USER_DATA} from '@constants/localStorage';
// import {AUTH} from '@constants/navigation';

// Utility Functions
// import {EncryptData, DecryptData} from '@services/security';
// import {checkToken} from '@services/api';

// Store / Redux
import Actions from '@store/actions';

const AppNavigation = ({navigation}) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const {isLoading} = state;

  // const navigation = useNavigation();

  // const fetchData = async () => {
  //   const Token = await AsyncStorage.getItem(TOKEN);
  //   const UserData = await AsyncStorage.getItem(USER_DATA);
  //   if (Token && UserData) {
  //     dispatch(Actions.setProfile(JSON.parse(UserData)));
  //     dispatch(Actions.stopLoader());
  //   } else {
  //     setTimeout(() => {
  //       dispatch(Actions.stopLoader());
  //       // navigation.navigate(AUTH);
  //     }, 1000);
  //   }
  // };

  useEffect(() => {
    // fetchData();
  }, []);

  // if (isLoading) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer>
      <AuthNavigation />
      {/* <AuthNavigation /> */}
      {/* {state.isAuthenticated ? <HomeNavigation /> : <AuthNavigation />} */}
    </NavigationContainer>
  );
};

export default AppNavigation;
