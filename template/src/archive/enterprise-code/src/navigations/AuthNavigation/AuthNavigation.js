import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SIGN_IN, SIGN_UP} from '@constants/navigation';
import Signin from '@screens/common/Auth/Signin';
import Signup from '@screens/common/Auth/Signup';

const AuthNavigation = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator initialRouteName={SIGN_IN}>
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name={SIGN_IN}
        component={Signin}
      />
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name={SIGN_UP}
        component={Signup}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
