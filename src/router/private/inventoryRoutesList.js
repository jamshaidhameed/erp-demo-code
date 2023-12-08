import { lazy } from 'react';
import * as routes from 'router/routes/inventoryRoutes';
import * as keys from '../routeKeys/inventoryKeys';

const AdminUSComponent = lazy(() => import('views/Inventory/Admin/UserStores'));

const inventoryRoutes = [
  {
    key: keys.INVENTORY_ADMIN_USER_STORES,
    path: routes.ADMIN_USER_STORES,
    title: 'User Stores',
    checkPermission: true,
    component: AdminUSComponent,
  },
];

export default inventoryRoutes;
