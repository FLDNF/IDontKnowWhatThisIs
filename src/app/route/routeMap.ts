import RouteMap from '~/lib/RouteMap';

import HomePage from '~/pages/Home/HomePage';
import AboutPage from '~/pages/AboutPage';
import MessagePage from '~/pages/MessagePage';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/inbox',
    component: MessagePage,
  },
];

const routeMap = new RouteMap(routes, {});

export default routeMap;
