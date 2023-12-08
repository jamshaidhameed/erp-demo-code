import LoginComponent from 'views/Shared/Auth/login';
import { LOGIN } from '../routes';
import { LOGIN_KEY } from '../routeKeys';

const authRoutes = [
  {
    key: LOGIN_KEY,
    path: '/',
    title: 'Login',
    component: LoginComponent,
  },
  {
    key: LOGIN_KEY,
    path: LOGIN,
    title: 'Login',
    component: LoginComponent,
  },
];

export default authRoutes;
