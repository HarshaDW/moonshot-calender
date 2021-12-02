import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import Header from './components/common/Header';
import Layout from './components/common/Layout';
import Upcoming from './components/Upcoming/';
import theme from './theme';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Layout>
            <Upcoming />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
