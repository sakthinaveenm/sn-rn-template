// Packages
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Constants
import {
  PROFILE,
  DASHBOARD,
  MAPS,
  REQUESTS,
  NOTIFICATION,
} from '@constants/navigation';

// Screens
import SplashScreen from '@screens/SplashScreen';
import Auth from '@screens/Auth';
import Notification from '@screens/Notification';
import Profile from '@screens/Profile';
import DashBoard from '@screens/DashBoard';
import Maps from '@screens/Maps';

const HomeNavigation = () => {
  const MainBottomStack = createBottomTabNavigator();
  return (
    <MainBottomStack.Navigator initialRouteName={DASHBOARD}>
      <MainBottomStack.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'notification',
          tabBarIcon: ({color}) => <Icon name="bell" color={color} size={24} />,
        }}
        name={NOTIFICATION}
        component={Notification}
      />
      <MainBottomStack.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'maps',
          tabBarIcon: ({color}) => <Icon name="map" color={color} size={24} />,
        }}
        name={MAPS}
        component={Maps}
      />
      <MainBottomStack.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
        name={DASHBOARD}
        component={DashBoard}
      />
      <MainBottomStack.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Requests',
          tabBarIcon: ({color}) => (
            <Icon name="exclamation-circle" color={color} size={24} />
          ),
        }}
        name={REQUESTS}
        component={Auth}
      />
      <MainBottomStack.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'profile',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={24} />,
        }}
        name={PROFILE}
        component={Profile}
      />
    </MainBottomStack.Navigator>
  );
};

export default HomeNavigation;
