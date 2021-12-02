import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/common/Header';
import Layout from './components/common/Layout';
import Upcoming from './components/Upcoming/';
import theme from './theme';
import { useAppDispatch } from './redux/hooks';
import { fetchUpcomingLaunches } from './redux/upcoming/upcomingSlice';
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from 'react-router-dom';
import routes from './routes';

const App = () => {
  const dispatch = useAppDispatch();
  dispatch(fetchUpcomingLaunches());
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Layout>
            <Switch>
              {routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    render={(props: RouteComponentProps<any>) => (
                      <route.component {...props} />
                    )}
                  ></Route>
                );
              })}
            </Switch>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
