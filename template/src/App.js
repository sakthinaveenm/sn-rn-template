import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from './components/common/Input';
import {Debug} from './services/utility';
import ChatDashboard from './screens/ChatDashboard';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return <ChatDashboard />;
};

export default App;

const styles = StyleSheet.create({
  inputStyle: {
    // borderWidth: 0,
  },
});
