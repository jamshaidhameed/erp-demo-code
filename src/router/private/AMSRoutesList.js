import { lazy } from 'react';
import * as routes from 'router/routes/AMSRoutes';
import * as keys from '../routeKeys/AMSKeys';

const ManageUsersComponent = lazy(() => import('views/AMS/ManageUsers'));

const AMSRoutes = [
  {
    key: keys.AMS_MANAGE_USERS,
    path: routes.MANAGE_USERS,
    title: 'Manage Users',
    checkPermission: true,
    component: ManageUsersComponent,
  },
];

export default AMSRoutes;
