import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import ThemeProvider from './theme';
import { MotionLazyContainer } from './components/animate';
import FollowPointer from './components/followPointer';

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <MotionLazyContainer>
            <Router />
          </MotionLazyContainer>
        </ThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
