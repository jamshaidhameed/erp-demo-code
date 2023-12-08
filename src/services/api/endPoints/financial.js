import { store } from 'store';

const storeState = store.getState();
const financialBaseUrl = `${storeState.configs.apiBaseUrls.financial}/api/financial`;
const UR_PREFIX = `${financialBaseUrl}/user-rights`;
const FC_PREFIX = `${financialBaseUrl}/config`;
const FGR_PREFIX = `${financialBaseUrl}/general-reports`;
const FGLT_PREFIX = `${financialBaseUrl}/gl-transactions`;
const FR_PREFIX = `${financialBaseUrl}/financial-reports`;

/* ===============================        USER RIGHTS      ==========================================  */

//   Books
export const GET_USER_RIGHTS_USERS_LIST = `${UR_PREFIX}/assign-books/get-users`;
export const GET_USER_RIGHTS_ASSIGNED_BOOKS = `${UR_PREFIX}/assign-books/get-list`;
export const ADD_USER_RIGHTS_BOOK = `${UR_PREFIX}/assign-books/assign`;

/* ===============================        CONFIGURATIONS      ==========================================  */

//   Chart Of Accounts
export const GET_COA_LIST = `${FC_PREFIX}/chartAccount/list`;
export const GET_COA_MAIN_ACCOUNTS_LIST = `${FC_PREFIX}/chartAccount/getMainAccounts`;
export const GET_COA = `${FC_PREFIX}/chartAccount/detail`;
export const ADD_COA = `${FC_PREFIX}/chartAccount/create`;
export const UPDATE_COA = `${FC_PREFIX}/chartAccount/update`;

//   Financial Year
export const GET_FINANCIAL_YEARS_LIST = `${FC_PREFIX}/year/list`;
export const GET_FINANCIAL_YEAR = `${FC_PREFIX}/year/detail`;
export const ADD_FINANCIAL_YEAR = `${FC_PREFIX}/year/create`;
export const UPDATE_FINANCIAL_YEAR = `${FC_PREFIX}/year/update`;

//   Financial Period
export const GET_FINANCIAL_PERIODS_LIST = `${FC_PREFIX}/financial-period/getFP`;
export const GET_FINANCIAL_PERIODS_BY_YEAR = `${FC_PREFIX}/financial-periods/against-year`;
export const ADD_FINANCIAL_PERIOD = `${FC_PREFIX}/financial-period/create`;
export const UPDATE_FINANCIAL_PERIOD = `${FC_PREFIX}/financial-period/update`;

//   Voucher Type
export const GET_VOUCHER_TYPES_LIST = `${FC_PREFIX}/voucher-type/get-list`;
export const GET_VOUCHER_TYPE = `${FC_PREFIX}/voucher-type/get-by-ID`;
export const ADD_VOUCHER_TYPE = `${FC_PREFIX}/voucher-type/create`;
export const UPDATE_VOUCHER_TYPE = `${FC_PREFIX}/voucher-type/update`;
export const DELETE_VOUCHER_TYPE = `${FC_PREFIX}/voucher-type/delete`;

//   Sub Account Groups
export const GET_SUB_ACCOUNT_GROUPS_LIST = `${FC_PREFIX}/sub-account-group/get-list`;
export const GET_SUB_ACCOUNT_GROUP = `${FC_PREFIX}/sub-account-group/get-by-ID`;
export const ADD_SUB_ACCOUNT_GROUP = `${FC_PREFIX}/sub-account-group/create`;
export const UPDATE_SUB_ACCOUNT_GROUP = `${FC_PREFIX}/sub-account-group/update`;
export const DELETE_SUB_ACCOUNT_GROUP = `${FC_PREFIX}/sub-account-group/delete`;

//   Sub Accounts
export const GET_SUB_ACCOUNTS_LIST = `${FC_PREFIX}/sub-account/get-list`;
export const GET_SUB_ACCOUNTS_BY_ACCOUNT_LIST = `${FC_PREFIX}/sub-account/get-by-account`;
export const GET_SUB_ACCOUNT = `${FC_PREFIX}/sub-account/get-by-id`;
export const GET_SUB_ACCOUNT_CODE = `${FC_PREFIX}/sub-account/get-account-code`;
export const ADD_SUB_ACCOUNT = `${FC_PREFIX}/sub-account/create`;
export const UPDATE_SUB_ACCOUNT = `${FC_PREFIX}/sub-account/update`;
export const DELETE_SUB_ACCOUNT = `${FC_PREFIX}/sub-account/delete`;

//   Books
export const GET_CONFIG_BOOKS_LIST = `${FC_PREFIX}/book/list`;
export const GET_CONFIG_BOOK = `${FC_PREFIX}/book/detail`;
export const GET_CONFIG_BOOK_CODE = `${FC_PREFIX}/book/getCode`;
export const ADD_CONFIG_BOOK = `${FC_PREFIX}/book/create`;
export const UPDATE_CONFIG_BOOK = `${FC_PREFIX}/book/update`;
export const DELETE_CONFIG_BOOKS = `${FC_PREFIX}/book/delete`;

//   Cheque Format
export const GET_CHEQUE_FORMAT_LIST = `${FC_PREFIX}/cheque-format/get-list`;
export const GET_CHEQUE_FORMAT = `${FC_PREFIX}/cheque-format/get-by-id`;
export const ADD_CHEQUE_FORMAT = `${FC_PREFIX}/cheque-format/create`;
export const UPDATE_CHEQUE_FORMAT = `${FC_PREFIX}/cheque-format/update`;
export const DELETE_CHEQUE_FORMAT = `${FC_PREFIX}/cheque-format/delete`;

//   Discount Policy
export const GET_DISCOUNT_POLICY_LIST = `${FC_PREFIX}/discount-policy/list`;
export const ADD_DISCOUNT_POLICY = `${FC_PREFIX}/discount-policy/create`;
export const GET_DISCOUNT_POLICY = `${FC_PREFIX}/discount-policy/edit`;
export const UPDATE_DISCOUNT_POLICY = `${FC_PREFIX}/discount-policy/update`;

//   General Setting
export const GET_GENERAL_SETTING_LIST = `${FC_PREFIX}/general-setting/list`;
export const ADD_GENERAL_SETTING = `${FC_PREFIX}/general-setting/create`;
export const GET_GENERAL_SETTING = `${FC_PREFIX}/general-setting/get-by-id`;
export const UPDATE_GENERAL_SETTING = `${FC_PREFIX}/general-setting/update`;

//   Cash Master
export const GET_CASH_MASTER_LIST = `${FC_PREFIX}/cash-master/get-list`;
export const GET_CASH_MASTER = `${FC_PREFIX}/cash-master/get-by-ID`;
export const ADD_CASH_MASTER = `${FC_PREFIX}/cash-master/create`;
export const UPDATE_CASH_MASTER = `${FC_PREFIX}/cash-master/update`;
export const DELETE_CASH_MASTER = `${FC_PREFIX}/cash-master/delete`;

//   Bank Master
export const GET_BANK_MASTER_LIST = `${FC_PREFIX}/bank-master/get-list`;
export const GET_BANK_MASTER = `${FC_PREFIX}/bank-master/get-by-ID`;
export const ADD_BANK_MASTER = `${FC_PREFIX}/bank-master/create`;
export const UPDATE_BANK_MASTER = `${FC_PREFIX}/bank-master/update`;
export const DELETE_BANK_MASTER = `${FC_PREFIX}/bank-master/delete`;

/* ===============================        GL TRANSACTIONS      ==========================================  */

// Journal Vouchers
export const GET_GLT_JV_LIST = `${FGLT_PREFIX}/vouchers/list`;
export const GET_GLT_JV = `${FGLT_PREFIX}/vouchers/get`;
export const ADD_GLT_JV = `${FGLT_PREFIX}/vouchers/add`;
export const UPDATE_GLT_JV = `${FGLT_PREFIX}/vouchers/edit`;
export const DELETE_GLT_JV = `${FGLT_PREFIX}/vouchers/delete`;
export const REVERSE_GLT_JV = `${FGLT_PREFIX}/vouchers/reverse`;
export const ADD_GLT_JV_DETAIL = `${FGLT_PREFIX}/voucher/detail/add`;
export const UPDATE_GLT_JV_DETAIL = `${FGLT_PREFIX}/voucher/detail/edit`;
export const DELETE_GLT_JV_DETAIL = `${FGLT_PREFIX}/vouchers/detail/delete`;

/* ===============================        GENERAL REPORTS      ==========================================  */

export const GET_GR_COA_REPORT = `${FGR_PREFIX}/chart-of-accounts/get-list`;
export const GET_GR_JV_REPORT = `${FGR_PREFIX}/journal-voucher-report/get-list`;
export const GET_GR_GL_REPORT = `${FGLT_PREFIX}/vouchers/ledger/report`;
export const GET_GR_SL_REPORT = `${FGLT_PREFIX}/vouchers/sub/report`;
export const GET_GR_TB_REPORT = `${FGR_PREFIX}/trail-balance/get-summary`;
export const GET_GR_PL_REPORT = `${FGR_PREFIX}/profit-loss/get-data`;

/* ===============================        FINANCIAL REPORTS      ==========================================  */

// User Defined Final AC
export const GET_FR_UDFA_LIST = `${FR_PREFIX}/user-defined-fa/get-list`;
export const GET_FR_UDFA = `${FR_PREFIX}/user-defined-fa/get`;
export const ADD_FR_UDFA = `${FR_PREFIX}/user-defined-fa/add`;
export const UPDATE_FR_UDFA = `${FR_PREFIX}/user-defined-fa/edit`;
export const DELETE_FR_UDFA = `${FR_PREFIX}/user-defined-fa/delete`;
