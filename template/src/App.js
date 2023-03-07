import React, {useState} from 'react';
import AppProviders from '@providers/AppProviders';
import AppNavigation from '@navigations';
import AppContainer from '@containers/AppContainer';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <AppProviders>
      <AppContainer>{/* <AppNavigation /> */}</AppContainer>
    </AppProviders>
  );
};

export default App;
