import { lazy } from 'react';
import * as routes from 'router/routes/payrollRoutes';
import * as keys from '../routeKeys/payrollRoutesKeys';

const PayrollDashboard = lazy(() => import('views/Payroll/Dashboard'));
const HREmployeeTypesComponent = lazy(() => import('views/Payroll/HumanResource/EmployeeType'));
const HREmployeeCategoriesComponent = lazy(() =>
  import('views/Payroll/HumanResource/EmployeeCategory')
);
const HRLocationsComponent = lazy(() => import('views/Payroll/HumanResource/Locations'));
const HRBanksComponent = lazy(() => import('views/Payroll/HumanResource/Banks'));
const HRDesignationsComponent = lazy(() => import('views/Payroll/HumanResource/Designations'));
const HREGComponent = lazy(() => import('views/Payroll/HumanResource/ExecutiveGrades'));
const HREobisComponent = lazy(() => import('views/Payroll/HumanResource/Eobi'));
const HREBIComponent = lazy(() => import('views/Payroll/HumanResource/EmployeeBasicInfo'));
const DefinitionsAdvanceTypeComponent = lazy(() => import('views/Payroll/Definitions/AdvanceType'));
const DefinitionsAdditionTypeComponent = lazy(() =>
  import('views/Payroll/Definitions/AdditionType')
);

const payrollRoutes = [
  // Dashboard
  {
    key: keys.PAYROLL_DASHBOARD_KEY,
    path: routes.PAYROLL_DASHBOARD,
    title: 'Payroll',
    checkPermission: true,
    component: PayrollDashboard,
  },

  // Human Resource
  {
    key: keys.PAYROLL_HR_ET,
    path: routes.HR_ET,
    title: 'Employee Types',
    checkPermission: true,
    component: HREmployeeTypesComponent,
  },
  {
    key: keys.PAYROLL_HR_EC,
    path: routes.HR_EC,
    title: 'Employee Categories',
    checkPermission: true,
    component: HREmployeeCategoriesComponent,
  },
  {
    key: keys.PAYROLL_HR_LOCATIONS,
    path: routes.HR_LOCATIONS,
    title: 'Locations',
    checkPermission: true,
    component: HRLocationsComponent,
  },
  {
    key: keys.PAYROLL_HR_BANKS,
    path: routes.HR_BANKS,
    title: 'Banks',
    checkPermission: true,
    component: HRBanksComponent,
  },
  {
    key: keys.PAYROLL_HR_DESIGNATIONS,
    path: routes.HR_DESIGNATIONS,
    title: 'Designations',
    checkPermission: true,
    component: HRDesignationsComponent,
  },
  {
    key: keys.PAYROLL_HR_EG,
    path: routes.HR_EG,
    title: 'Executive Grades',
    checkPermission: true,
    component: HREGComponent,
  },
  {
    key: keys.PAYROLL_HR_EOBI,
    path: routes.HR_EOBI,
    title: 'EOBI',
    checkPermission: true,
    component: HREobisComponent,
  },
  {
    key: keys.PAYROLL_HR_EBI,
    path: routes.HR_EBI,
    title: 'Employee Basic Info',
    checkPermission: true,
    component: HREBIComponent,
  },

  // Definitions
  {
    key: keys.PAYROLL_DEFINITIONS_ADVANCE_TYPE,
    path: routes.DEFINITIONS_ADVANCE_TYPE,
    title: 'Advance Type',
    checkPermission: true,
    component: DefinitionsAdvanceTypeComponent,
  },
  {
    key: keys.PAYROLL_DEFINITIONS_ADDITION_TYPE,
    path: routes.DEFINITIONS_ADDITION_TYPE,
    title: 'Addition Type',
    checkPermission: true,
    component: DefinitionsAdditionTypeComponent,
  },
];

export default payrollRoutes;
