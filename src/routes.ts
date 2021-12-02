import IRoute from './types/IRoute';
import Upcoming from './components/Upcoming';
import SearchByDate from './components/SearchByDate';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Upcoming',
    component: Upcoming,
    exact: true
  },
  {
    path: '/search',
    name: 'Search Page',
    component: SearchByDate,
    exact: true
  },
]

export default routes
