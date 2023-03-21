import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {ThemeProvider} from '@hooks/useTheme';

const AppProviders = ({children}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProviders;
