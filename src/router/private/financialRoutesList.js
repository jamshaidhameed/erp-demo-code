import { lazy } from 'react';
import * as routes from 'router/routes/financialRoutes';
import * as keys from '../routeKeys/financialRoutesKeys';

const FinancialDashboard = lazy(() => import('views/Financial/Dashboard'));
const UserRightAccountsComponent = lazy(() => import('views/Financial/UserRights/Accounts'));
const UserRightBooksComponent = lazy(() => import('views/Financial/UserRights/Books'));

const ConfigCOAComponent = lazy(() => import('views/Financial/Configurations/ChartOfAccounts'));
const ConfigVTComponent = lazy(() => import('views/Financial/Configurations/VoucherTypes'));
const ConfigBooksComponent = lazy(() => import('views/Financial/Configurations/Books'));
const ConfigSAGComponent = lazy(() => import('views/Financial/Configurations/SubAccountGroups'));
const ConfigSAComponent = lazy(() => import('views/Financial/Configurations/SubAccounts'));
const ConfigSAFormComponent = lazy(() =>
  import('views/Financial/Configurations/SubAccounts/subAccountsForm')
);
const ConfigFYComponent = lazy(() => import('views/Financial/Configurations/FinancialYears'));
const ConfigFPComponent = lazy(() =>
  import('views/Financial/Configurations/FinancialPeriods/list')
);
const ConfigFPFormComponent = lazy(() =>
  import('views/Financial/Configurations/FinancialPeriods/form')
);
const ConfigCFComponent = lazy(() => import('views/Financial/Configurations/ChequeFormat'));
const ConfigCMComponent = lazy(() => import('views/Financial/Configurations/CashMaster'));
const ConfigBMComponent = lazy(() => import('views/Financial/Configurations/BankMaster'));
const ConfigDPComponent = lazy(() => import('views/Financial/Configurations/DiscountPolicy'));
const ConfigGSComponent = lazy(() => import('views/Financial/Configurations/GeneralSettings'));
const GLTJVComponent = lazy(() => import('views/Financial/GLT/JournalVouchers/list'));
const GLTJVFormComponent = lazy(() => import('views/Financial/GLT/JournalVouchers/form'));
const GRCOAComponent = lazy(() => import('views/Financial/GeneralReports/ChartOfAccounts'));
const GRGLComponent = lazy(() => import('views/Financial/GeneralReports/GeneralLedger'));
const GRJVReportComponent = lazy(() => import('views/Financial/GeneralReports/JournalVoucher'));
const GRSLComponent = lazy(() => import('views/Financial/GeneralReports/SubLedger'));
const GRTBComponent = lazy(() => import('views/Financial/GeneralReports/TrialBalance'));
const GRPLComponent = lazy(() => import('views/Financial/GeneralReports/ProfitLossReport'));
const FRUserDefinedFinalACComponent = lazy(() =>
  import('views/Financial/FinancialReports/UserDefinedFinalAC/list')
);
const FRUserDefinedFinalACFormComponent = lazy(() =>
  import('views/Financial/FinancialReports/UserDefinedFinalAC/form')
);

const financialRoutes = [
  // Dashboard
  {
    key: keys.FINANCIAL_DASHBOARD_KEY,
    path: routes.FINANCIAL_DASHBOARD,
    title: 'Financial',
    checkPermission: true,
    component: FinancialDashboard,
  },

  // user rights
  {
    key: keys.FINANCIAL_RIGHTS_ACCOUNTS,
    path: routes.USER_RIGHTS_ACCOUNTS,
    title: 'Accounts',
    checkPermission: true,
    component: UserRightAccountsComponent,
  },
  {
    key: keys.FINANCIAL_RIGHTS_BOOKS,
    path: routes.USER_RIGHTS_BOOKS,
    title: 'Books',
    checkPermission: true,
    component: UserRightBooksComponent,
  },

  // Configuration
  {
    key: keys.FINANCIAL_CONFIG_COA,
    path: routes.CONFIGURATIONS_COA,
    title: 'Chart Of Accounts',
    checkPermission: true,
    component: ConfigCOAComponent,
  },
  {
    key: keys.FINANCIAL_CONFIG_VT,
    path: routes.CONFIGURATIONS_VOUCHER_TYPES,
    title: 'Voucher Types',
    checkPermission: true,
    component: ConfigVTComponent,
  },
  {
    key: keys.FINANCIAL_CONFIG_BOOKS,
    path: routes.CONFIGURATIONS_BOOKS,
    title: 'Books',
    checkPermission: true,
    component: ConfigBooksComponent,
  },
  {
    key: keys.FINANCIAL_CONFIG_SAG,
    path: routes.CONFIGURATIONS_SAG,
    title: 'Sub Account Groups',
    checkPermission: true,
    component: ConfigSAGComponent,
  },
  {
    key: keys.FINANCIAL_CONFIG_SA,
    path: routes.CONFIGURATIONS_SUB_ACCOUNTS,
    title: 'Sub Accounts',
    checkPermission: true,
    component: ConfigSAComponent,
  },
  {
    key: keys.FINANCIAL_CONFIG_SA,
    path: routes.CONFIGURATIONS_SUB_ACCOUNTS_FROM,
    title: 'Add/Edit Sub Accounts',
    checkPermission: true,
    component: ConfigSAFormComponent,
  },
  {
    key: keys.FINANCIAL_CONFIG_FY,
    path: routes.CONFIGURATIONS_FY,
    title: 'Financial Years',
    checkPermission: true,
    component: ConfigFYComponent,
  },
  {
    key: keys.FINANCIAL_CONFIG_FP,
    path: routes.CONFIGURATIONS_FP,
    title: 'Financial Periods',
    checkPermission: true,
    component: ConfigFPComponent,
  },
  {
    key: keys.FINANCIAL_CONFIG_FP,
    path: routes.CONFIGURATIONS_FP_FORM,
    title: 'Add/Edit Financial Period',
    checkPermission: true,
    component: ConfigFPFormComponent,
  },
  {
    key: keys.FINANCIAL_CONFIG_CF,
    path: routes.CONFIGURATIONS_CF,
    title: 'Cheque Format',
    checkPermission: true,
    component: ConfigCFComponent,
  },
  {
    key: keys.FINANCIAL_CONFIG_CM,
    path: routes.CONFIGURATIONS_CM,
    title: 'Cash Master',
    checkPermission: true,
    component: ConfigCMComponent,
  },
  {
    key: keys.FINANCIAL_CONFIG_BM,
    path: routes.CONFIGURATIONS_BM,
    title: 'Bank Master',
    checkPermission: true,
    component: ConfigBMComponent,
  },
  {
    key: keys.FINANCIAL_CONFIG_DP,
    path: routes.CONFIGURATIONS_DP,
    title: 'Discount Policy',
    checkPermission: true,
    component: ConfigDPComponent,
  },
  {
    key: keys.FINANCIAL_CONFIG_GS,
    path: routes.CONFIGURATIONS_GS,
    title: 'General Settings',
    checkPermission: true,
    component: ConfigGSComponent,
  },

  // GL Transactions
  {
    key: keys.FINANCIAL_GLT_JV,
    path: routes.GLT_JV,
    title: 'Journal Vouchers',
    checkPermission: true,
    component: GLTJVComponent,
  },
  {
    key: keys.FINANCIAL_GLT_JV,
    path: routes.GLT_JV_FORM,
    title: 'Add/Edit Journal Voucher',
    checkPermission: true,
    component: GLTJVFormComponent,
  },

  // General Reports
  {
    key: keys.FINANCIAL_GR_COA,
    path: routes.GR_COA,
    title: 'Chart Of Accounts Report',
    checkPermission: true,
    component: GRCOAComponent,
  },
  {
    key: keys.FINANCIAL_GR_GL,
    path: routes.GR_GL,
    title: 'General Ledger Report',
    checkPermission: true,
    component: GRGLComponent,
  },
  {
    key: keys.FINANCIAL_GR_JV,
    path: routes.GR_JV,
    title: 'Journal Vouchers Report',
    checkPermission: true,
    component: GRJVReportComponent,
  },
  {
    key: keys.FINANCIAL_GR_SL,
    path: routes.GR_SL,
    title: 'Sub Ledger Report',
    checkPermission: true,
    component: GRSLComponent,
  },
  {
    key: keys.FINANCIAL_GR_TB,
    path: routes.GR_TB,
    title: 'Trial Balance Report',
    checkPermission: true,
    component: GRTBComponent,
  },
  {
    key: keys.FINANCIAL_GR_PLR,
    path: routes.GR_PLR,
    title: 'Profit/Loss Report',
    checkPermission: true,
    component: GRPLComponent,
  },

  // Financial Reports
  {
    key: keys.FINANCIAL_FR_FAC,
    path: routes.FR_FAC,
    title: 'User Defined Final AC',
    checkPermission: true,
    component: FRUserDefinedFinalACComponent,
  },
  {
    key: keys.FINANCIAL_FR_FAC,
    path: routes.FR_FAC_FORM,
    title: 'Add/Edit User Defined Final AC',
    checkPermission: true,
    component: FRUserDefinedFinalACFormComponent,
  },
];

export default financialRoutes;
