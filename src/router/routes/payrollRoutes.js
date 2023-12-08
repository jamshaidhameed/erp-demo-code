const ROUTE_PREFIX = '/payroll';

const PAYROLL_DASHBOARD = `${ROUTE_PREFIX}/dashboard`;

const HR_ET = `${ROUTE_PREFIX}/HR/employee-types`;
const HR_EC = `${ROUTE_PREFIX}/HR/employee-categories`;
const HR_LOCATIONS = `${ROUTE_PREFIX}/HR/locations`;
const HR_BANKS = `${ROUTE_PREFIX}/HR/banks`;
const HR_DESIGNATIONS = `${ROUTE_PREFIX}/HR/designations`;
const HR_EG = `${ROUTE_PREFIX}/HR/executive-grades`;
const HR_EOBI = `${ROUTE_PREFIX}/HR/EOBI`;
const HR_EBI = `${ROUTE_PREFIX}/HR/Employee-basic-info`;

const DEFINITIONS_ADVANCE_TYPE = `${ROUTE_PREFIX}/definitions/advance-types`;
const DEFINITIONS_ADDITION_TYPE = `${ROUTE_PREFIX}/definitions/addition-types`;
const DEFINITIONS_ALLOWANCES_TYPE = `${ROUTE_PREFIX}/definitions/allowances-types`;
const DEFINITIONS_DT = `${ROUTE_PREFIX}/definitions/deduction-types`;
const DEFINITIONS_LT = `${ROUTE_PREFIX}/definitions/loan-types`;
const DEFINITIONS_BT = `${ROUTE_PREFIX}/definitions/bonus-types`;
const DEFINITIONS_TAX_TC_CD = `${ROUTE_PREFIX}/definitions/tax/tax-credits/charitable-donations`;
const DEFINITIONS_TAX_TC_SI = `${ROUTE_PREFIX}/definitions/tax/tax-credits/share-investments`;
const DEFINITIONS_ELR_LT = `${ROUTE_PREFIX}/definitions/employee-leave-record/leave-types`;
const DEFINITIONS_ELR_AS = `${ROUTE_PREFIX}/definitions/employee-leave-record/attendance-status`;
const DEFINITIONS_PF_OB = `${ROUTE_PREFIX}/definitions/PF-opening-balance`;
const DEFINITIONS_PF_YP = `${ROUTE_PREFIX}/definitions/PF-yearly-profit`;
const DEFINITIONS_PS = `${ROUTE_PREFIX}/definitions/payroll-system`;

const TRANSACTIONS_ADVANCE = `${ROUTE_PREFIX}/transactions/advance`;
const TRANSACTIONS_ADDITION = `${ROUTE_PREFIX}/transactions/addition`;
const TRANSACTIONS_DEDUCTION = `${ROUTE_PREFIX}/transactions/deduction`;
const TRANSACTIONS_LI = `${ROUTE_PREFIX}/transactions/loan-issues`;
const TRANSACTIONS_LE = `${ROUTE_PREFIX}/transactions/leave-encashment`;
const TRANSACTIONS_HONORARIUM = `${ROUTE_PREFIX}/transactions/honorarium`;
const TRANSACTIONS_RAR = `${ROUTE_PREFIX}/transactions/rest-and-recreation`;
const TRANSACTIONS_OP = `${ROUTE_PREFIX}/transactions/other-payments`;
const TRANSACTIONS_TA = `${ROUTE_PREFIX}/transactions/tax-adjustments`;
const TRANSACTIONS_RESIGN = `${ROUTE_PREFIX}/transactions/resign`;
const TRANSACTIONS_EFA = `${ROUTE_PREFIX}/transactions/employee-fuel-adjustment`;
const TRANSACTIONS_FINANCIAL_OI = `${ROUTE_PREFIX}/transactions/financial/other-incomes`;
const TRANSACTIONS_FINANCIAL_SS = `${ROUTE_PREFIX}/transactions/financial/salary-schemes`;
const TRANSACTIONS_FINANCIAL_SH = `${ROUTE_PREFIX}/transactions/financial/salary-history`;
const TRANSACTIONS_FINANCIAL_SC = `${ROUTE_PREFIX}/transactions/financial/salary-calculations`;
const TRANSACTIONS_ELR_AR = `${ROUTE_PREFIX}/transactions/employee-leave-record/attendance-register`;
const TRANSACTIONS_ELR_EEPL = `${ROUTE_PREFIX}/transactions/employee-leave-record/employee-EX-pakistan-leave`;

const REPORTS_LISTING_ADVANCE_TYPE = `${ROUTE_PREFIX}/reports/listing/advance-types`;
const REPORTS_LISTING_ALLOWANCE_TYPE = `${ROUTE_PREFIX}/reports/listing/allowance-types`;
const REPORTS_LISTING_BONUS_TYPE = `${ROUTE_PREFIX}/reports/listing/bonus-types`;
const REPORTS_LISTING_DT = `${ROUTE_PREFIX}/reports/listing/deduction-types`;
const REPORTS_LISTING_LT = `${ROUTE_PREFIX}/reports/listing/loan-types`;
const REPORTS_LISTING_LEAVE_TYPE = `${ROUTE_PREFIX}/reports/listing/leave-types`;
const REPORTS_PR_AS = `${ROUTE_PREFIX}/reports/pay-register/allowance-summary`;
const REPORTS_PR_DS = `${ROUTE_PREFIX}/reports/pay-register/deductions-summary`;
const REPORTS_PR_LWPS = `${ROUTE_PREFIX}/reports/pay-register/location-wise-pay-summary`;
const REPORTS_PR_REA = `${ROUTE_PREFIX}/reports/pay-register/regular-employees-allowances`;
const REPORTS_PR_RED = `${ROUTE_PREFIX}/reports/pay-register/regular-employees-deductions`;
const REPORTS_PR_JCEA = `${ROUTE_PREFIX}/reports/pay-register/junior-contract-employees-allowances`;
const REPORTS_PR_JCED = `${ROUTE_PREFIX}/reports/pay-register/junior-contract-employees-deductions`;
const REPORTS_PR_SCEA = `${ROUTE_PREFIX}/reports/pay-register/senior-contract-employees-allowances`;
const REPORTS_PR_SCED = `${ROUTE_PREFIX}/reports/pay-register/senior-contract-employees-deductions`;
const REPORTS_PR_SRA = `${ROUTE_PREFIX}/reports/pay-register/salary-reconciliation-allowances`;
const REPORTS_PR_SRD = `${ROUTE_PREFIX}/reports/pay-register/salary-reconciliation-deductions`;
const REPORTS_PR_SS = `${ROUTE_PREFIX}/reports/pay-register/salary-statements`;
const REPORTS_PR_LFS = `${ROUTE_PREFIX}/reports/pay-register/letter-for-salary`;
const REPORTS_PR_LFB = `${ROUTE_PREFIX}/reports/pay-register/letter-for-bonus`;
const REPORTS_PR_CSR = `${ROUTE_PREFIX}/reports/pay-register/consolidate-salary-report`;

export {
  ROUTE_PREFIX,
  PAYROLL_DASHBOARD,
  HR_ET,
  HR_EC,
  HR_LOCATIONS,
  HR_BANKS,
  HR_DESIGNATIONS,
  HR_EG,
  HR_EOBI,
  HR_EBI,
  DEFINITIONS_ADVANCE_TYPE,
  DEFINITIONS_ADDITION_TYPE,
  DEFINITIONS_ALLOWANCES_TYPE,
  DEFINITIONS_DT,
  DEFINITIONS_LT,
  DEFINITIONS_BT,
  DEFINITIONS_TAX_TC_CD,
  DEFINITIONS_TAX_TC_SI,
  DEFINITIONS_ELR_LT,
  DEFINITIONS_ELR_AS,
  DEFINITIONS_PF_OB,
  DEFINITIONS_PF_YP,
  DEFINITIONS_PS,
  TRANSACTIONS_ADVANCE,
  TRANSACTIONS_ADDITION,
  TRANSACTIONS_DEDUCTION,
  TRANSACTIONS_LI,
  TRANSACTIONS_LE,
  TRANSACTIONS_HONORARIUM,
  TRANSACTIONS_RAR,
  TRANSACTIONS_OP,
  TRANSACTIONS_TA,
  TRANSACTIONS_RESIGN,
  TRANSACTIONS_EFA,
  TRANSACTIONS_FINANCIAL_OI,
  TRANSACTIONS_FINANCIAL_SS,
  TRANSACTIONS_FINANCIAL_SH,
  TRANSACTIONS_FINANCIAL_SC,
  TRANSACTIONS_ELR_AR,
  TRANSACTIONS_ELR_EEPL,
  REPORTS_LISTING_ADVANCE_TYPE,
  REPORTS_LISTING_ALLOWANCE_TYPE,
  REPORTS_LISTING_BONUS_TYPE,
  REPORTS_LISTING_DT,
  REPORTS_LISTING_LT,
  REPORTS_LISTING_LEAVE_TYPE,
  REPORTS_PR_AS,
  REPORTS_PR_DS,
  REPORTS_PR_LWPS,
  REPORTS_PR_REA,
  REPORTS_PR_RED,
  REPORTS_PR_JCEA,
  REPORTS_PR_JCED,
  REPORTS_PR_SCEA,
  REPORTS_PR_SCED,
  REPORTS_PR_SRA,
  REPORTS_PR_SRD,
  REPORTS_PR_SS,
  REPORTS_PR_LFS,
  REPORTS_PR_LFB,
  REPORTS_PR_CSR,
};
