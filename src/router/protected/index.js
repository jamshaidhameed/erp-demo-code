import { lazy } from 'react';
import { HOME } from '../routes';
import { DEFAULT_HOME } from '../routeKeys';

const HomeComponent = lazy(() => import('views/Shared/Landing/Dashboard'));

const protectedRoutes = [
  {
    key: DEFAULT_HOME,
    path: HOME,
    title: 'Home',
    hideSidebar: false,
    hideHeaderMenu: true,
    component: HomeComponent,
  },
];

export default protectedRoutes;
