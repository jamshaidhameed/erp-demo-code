const ROUTE_PREFIX = '/financial';

const FINANCIAL_DASHBOARD = `${ROUTE_PREFIX}/dashboard`;
const USER_RIGHTS_ACCOUNTS = `${ROUTE_PREFIX}/user-rights/accounts`;
const USER_RIGHTS_BOOKS = `${ROUTE_PREFIX}/user-rights/books`;

const CONFIGURATIONS_COA = `${ROUTE_PREFIX}/configurations/chart-of-accounts`;
const CONFIGURATIONS_VOUCHER_TYPES = `${ROUTE_PREFIX}/configurations/voucher-types`;
const CONFIGURATIONS_BOOKS = `${ROUTE_PREFIX}/configurations/books`;
const CONFIGURATIONS_SAG = `${ROUTE_PREFIX}/configurations/sub-account-groups`;
const CONFIGURATIONS_SUB_ACCOUNTS = `${ROUTE_PREFIX}/configurations/sub-accounts`;
const CONFIGURATIONS_SUB_ACCOUNTS_FROM_BASE = `${ROUTE_PREFIX}/configurations/sub-account`;
const CONFIGURATIONS_SUB_ACCOUNTS_FROM = `${CONFIGURATIONS_SUB_ACCOUNTS_FROM_BASE}/:id`;
const CONFIGURATIONS_FY = `${ROUTE_PREFIX}/configurations/financial-years`;
const CONFIGURATIONS_FP = `${ROUTE_PREFIX}/configurations/financial-periods`;
const CONFIGURATIONS_FP_FORM_BASE = `${ROUTE_PREFIX}/configurations/financial-period`;
const CONFIGURATIONS_FP_FORM = `${CONFIGURATIONS_FP_FORM_BASE}/:id`;
const CONFIGURATIONS_CF = `${ROUTE_PREFIX}/configurations/cheque-formats`;
const CONFIGURATIONS_CM = `${ROUTE_PREFIX}/configurations/cash-masters`;
const CONFIGURATIONS_BM = `${ROUTE_PREFIX}/configurations/bank-masters`;
const CONFIGURATIONS_DP = `${ROUTE_PREFIX}/configurations/discount-policy`;
const CONFIGURATIONS_GS = `${ROUTE_PREFIX}/configurations/general-settings`;

const GLT_JV = `${ROUTE_PREFIX}/GLT/journal-vouchers`;
const GLT_JV_FORM_BASE = `${ROUTE_PREFIX}/GLT/journal-voucher`;
const GLT_JV_FORM = `${GLT_JV_FORM_BASE}/:id`;
const GLT_CP = `${ROUTE_PREFIX}/GLT/cheque-printing`;
const GLT_PEV = `${ROUTE_PREFIX}/GLT/period-end-vouchers`;

const PT_PREPAYMENT = `${ROUTE_PREFIX}/PT/pre-payment`;
const PT_PURCHASE_INVOICE = `${ROUTE_PREFIX}/PT/purchase-invoice`;
const PT_PAYMENT = `${ROUTE_PREFIX}/PT/payment`;
const PT_DC_NOTE = `${ROUTE_PREFIX}/PT/debit-credit-notes`;
const PT_REFUND = `${ROUTE_PREFIX}/PT/refunds`;

const PR_VENDOR_LEDGER = `${ROUTE_PREFIX}/PR/vendor-ledger`;
const PR_VENDOR_AGING = `${ROUTE_PREFIX}/PR/vendor-aging`;
const PR_PAYMENT_SUMMARY = `${ROUTE_PREFIX}/PR/payment-summary`;
const PR_INVOICE_SUMMARY = `${ROUTE_PREFIX}/PR/invoice-summary`;
const PR_KNOCKED_PREPAYMENTS = `${ROUTE_PREFIX}/PR/knocked-prepayments`;
const PR_INVOICES_OUTSTANDING = `${ROUTE_PREFIX}/PR/invoices-outstanding`;
const PR_VENDOR_SUMMARY = `${ROUTE_PREFIX}/PR/vendor-summary`;

const RT_PREPAYMENT = `${ROUTE_PREFIX}/RT/pre-payment`;
const RT_SI = `${ROUTE_PREFIX}/RT/sale-invoice`;
const RT_RECEIPT = `${ROUTE_PREFIX}/RT/receipt`;
const RT_DC_NOTE = `${ROUTE_PREFIX}/RT/debit-credit-notes`;
const RT_REFUND_BANK = `${ROUTE_PREFIX}/RT/refund-bank`;

const RR_PAYMENT_SUMMARY = `${ROUTE_PREFIX}/RR/payment-summary`;
const RR_SALE_DETAIL = `${ROUTE_PREFIX}/RR/sale-detail`;

const GR_COA = `${ROUTE_PREFIX}/GR/chart-of-accounts`;
const GR_JV = `${ROUTE_PREFIX}/GR/journal-voucher`;
const GR_GL = `${ROUTE_PREFIX}/GR/general-ledger`;
const GR_SL = `${ROUTE_PREFIX}/GR/sub-ledger`;
const GR_TB = `${ROUTE_PREFIX}/GR/trial-balance`;
const GR_PLR = `${ROUTE_PREFIX}/GR/profit-loss`;

const FR_FPT = `${ROUTE_PREFIX}/FR/financial-period-template`;
const FR_FAC = `${ROUTE_PREFIX}/FR/user-defined-final-AC`;
const FR_FAC_FORM = `${FR_FAC}/:id`;
const FR_FR = `${ROUTE_PREFIX}/FR/financial-report`;

const BUDGETING_DB = `${ROUTE_PREFIX}/budgeting/department-budget`;
const BUDGETING_BR = `${ROUTE_PREFIX}/budgeting/budget-report`;

export {
  FINANCIAL_DASHBOARD,
  ROUTE_PREFIX,
  USER_RIGHTS_ACCOUNTS,
  USER_RIGHTS_BOOKS,
  CONFIGURATIONS_COA,
  CONFIGURATIONS_VOUCHER_TYPES,
  CONFIGURATIONS_BOOKS,
  CONFIGURATIONS_SAG,
  CONFIGURATIONS_SUB_ACCOUNTS,
  CONFIGURATIONS_SUB_ACCOUNTS_FROM_BASE,
  CONFIGURATIONS_SUB_ACCOUNTS_FROM,
  CONFIGURATIONS_FY,
  CONFIGURATIONS_FP,
  CONFIGURATIONS_FP_FORM_BASE,
  CONFIGURATIONS_FP_FORM,
  CONFIGURATIONS_CF,
  CONFIGURATIONS_CM,
  CONFIGURATIONS_BM,
  CONFIGURATIONS_DP,
  CONFIGURATIONS_GS,
  GLT_JV,
  GLT_JV_FORM_BASE,
  GLT_JV_FORM,
  GLT_CP,
  GLT_PEV,
  PT_PREPAYMENT,
  PT_PURCHASE_INVOICE,
  PT_PAYMENT,
  PT_DC_NOTE,
  PT_REFUND,
  PR_VENDOR_LEDGER,
  PR_VENDOR_AGING,
  PR_PAYMENT_SUMMARY,
  PR_INVOICE_SUMMARY,
  PR_KNOCKED_PREPAYMENTS,
  PR_INVOICES_OUTSTANDING,
  PR_VENDOR_SUMMARY,
  RT_PREPAYMENT,
  RT_SI,
  RT_RECEIPT,
  RT_DC_NOTE,
  RT_REFUND_BANK,
  RR_PAYMENT_SUMMARY,
  RR_SALE_DETAIL,
  GR_COA,
  GR_JV,
  GR_GL,
  GR_SL,
  GR_TB,
  GR_PLR,
  FR_FPT,
  FR_FAC,
  FR_FAC_FORM,
  FR_FR,
  BUDGETING_DB,
  BUDGETING_BR,
};
