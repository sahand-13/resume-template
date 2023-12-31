import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import ThemeProvider from './theme';
import { MotionLazyContainer } from './components/animate';
import FollowPointer from './components/followPointer';
import { SettingsProvider } from './contexts/SettingsContext';
import ThemeColorPresets from './components/ThemeColorPresets';
function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <SettingsProvider>
          <ThemeProvider>
            <ThemeColorPresets>
              <MotionLazyContainer>
                <Router />
              </MotionLazyContainer>
            </ThemeColorPresets>
          </ThemeProvider>
        </SettingsProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
