/* eslint-disable react/react-in-jsx-scope */
import {ThemeProvider} from '@hooks/useTheme';
import store from '@store';
import {Provider as ReduxProvider} from 'react-redux';

const AppProviders = ({children}) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

export default AppProviders;
