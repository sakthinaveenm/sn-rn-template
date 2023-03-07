import {SafeAreaView, StatusBar} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '@hooks/useTheme';
import styles from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

const AppContainer = ({children}) => {
  // Styles
  const {container} = styles;

  // Contexts
  const {theme} = useContext(ThemeContext);

  // Display Status Bar
  const STATUS_BAR_STATE = {
    VISIBLE: false,
    HIDDEN: true,
  };

  // Status bar Transition
  const STATUS_BAR_TRANSITION = {
    FADE: 'fade',
    SLIDE: 'slide',
    NONE: 'none',
  };

  // Status Bar Style
  const STATUS_BAR_STYLE = {
    DEFAULT: 'default',
    DARK_CONTENT: 'dark-content',
    LIGHT_CONTENT: 'light-content',
  };

  // Styles Applied to Common Components
  EStyleSheet.build({
    // always call EStyleSheet.build() even if you don't use global variables!
    $textFamily: 'monospace',
    $textColor: '#0275d8',
  });

  return (
    <SafeAreaView style={container}>
      <StatusBar
        animated={true}
        backgroundColor={theme.statusbar ?? '#61dafb'}
        barStyle={STATUS_BAR_STYLE.DEFAULT}
        showHideTransition={STATUS_BAR_TRANSITION.FADE}
        hidden={STATUS_BAR_STATE.VISIBLE}
      />
      {children}
    </SafeAreaView>
  );
};

export default AppContainer;
