import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
