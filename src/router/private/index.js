import { ROUTE_PREFIX as AMSPrefix } from 'router/routes/AMSRoutes';
import { ROUTE_PREFIX as inventoryPrefix } from 'router/routes/inventoryRoutes';
import { ROUTE_PREFIX as financialPrefix } from 'router/routes/financialRoutes';
import { ROUTE_PREFIX as payrollPrefix } from 'router/routes/payrollRoutes';
import menuKeys from '../menuKeys';
import financialRoutes from './financialRoutesList';
import payrollRoutes from './payrollRoutesList';
import AMSRoutes from './AMSRoutesList';
import inventoryRoutes from './inventoryRoutesList';

const privateRoutes = [
  {
    name: 'AMS',
    prefix: AMSPrefix,
    key: menuKeys.ams,
    routes: AMSRoutes,
  },
  {
    name: 'inventory',
    prefix: inventoryPrefix,
    key: menuKeys.inventory,
    routes: inventoryRoutes,
  },
  {
    name: 'financial',
    prefix: financialPrefix,
    key: menuKeys.financial,
    routes: financialRoutes,
  },
  {
    name: 'payroll',
    prefix: payrollPrefix,
    key: menuKeys.payroll,
    routes: payrollRoutes,
  },
];

export default privateRoutes;
