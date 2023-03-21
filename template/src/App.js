import AppProviders from '@providers/AppProviders';
import AppNavigation from '@navigations';
import AppContainer from '@containers/AppContainer';

const App = () => {
  return (
    <AppProviders>
      <AppContainer>
        <AppNavigation />
      </AppContainer>
    </AppProviders>
  );
};

export default App;
