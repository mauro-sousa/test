import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';
// import Login from './pages/Login';

const App = () => {
  const content = useRoutes(routes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <routes path="./pages/Login.js" component={Login} /> */}
        {content}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
