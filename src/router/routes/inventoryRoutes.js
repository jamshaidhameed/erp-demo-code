const ROUTE_PREFIX = '/inventory';

const ADMIN_USER_STORES = `${ROUTE_PREFIX}/admin/user-stores`;
const ADMIN_UT = `${ROUTE_PREFIX}/admin/user-transactions`;
const ADMIN_USS = `${ROUTE_PREFIX}/admin/user-sale-stores`;
const ADMIN_UCC = `${ROUTE_PREFIX}/admin/user-cost-centers`;
const ADMIN_UST = `${ROUTE_PREFIX}/admin/user-stores-transaction`;

const DEFINITION_STORE = `${ROUTE_PREFIX}/definition/stores`;
const DEFINITION_MANUFACTURER = `${ROUTE_PREFIX}/definition/manufacturers`;
const DEFINITION_VENDOR = `${ROUTE_PREFIX}/definition/vendors`;
const DEFINITION_ITEM = `${ROUTE_PREFIX}/definition/items`;
const DEFINITION_ITEM_DETAIL = `${ROUTE_PREFIX}/definition/item-detail`;
const DEFINITION_STORE_ITEMS = `${ROUTE_PREFIX}/definition/store-items`;
const DEFINITION_TAX_TYPE = `${ROUTE_PREFIX}/definition/tax-types`;
const DEFINITION_TTD = `${ROUTE_PREFIX}/definition/tax-type-detail`;
const DEFINITION_AAL = `${ROUTE_PREFIX}/definition/authority-amount-limits`;
const DEFINITION_RAAL = `${ROUTE_PREFIX}/definition/requisition-authority-amount-limits`;
const DEFINITION_VI = `${ROUTE_PREFIX}/definition/vendor-items`;
const DEFINITION_GN = `${ROUTE_PREFIX}/definition/generic-names`;
const DEFINITION_IVL = `${ROUTE_PREFIX}/definition/items-vendor-list`;
const DEFINITION_VT = `${ROUTE_PREFIX}/definition/vendor-terms`;
const DEFINITION_DF = `${ROUTE_PREFIX}/definition/drug-form`;
const DEFINITION_SIM = `${ROUTE_PREFIX}/definition/set-item-MPR`;
const DEFINITION_CUSTOMER = `${ROUTE_PREFIX}/definition/customer`;

const TRANSACTION_PR = `${ROUTE_PREFIX}/transaction/purchase-requisition`;
const TRANSACTION_PRA = `${ROUTE_PREFIX}/transaction/purchase-requisition-authorities`;
const TRANSACTION_GAR = `${ROUTE_PREFIX}/transaction/generate-auto-requisitions`;
const TRANSACTION_PO = `${ROUTE_PREFIX}/transaction/purchase-order`;
const TRANSACTION_POC = `${ROUTE_PREFIX}/transaction/purchase-order-closing`;
const TRANSACTION_POA = `${ROUTE_PREFIX}/transaction/purchase-order-authorities`;
const TRANSACTION_MIN = `${ROUTE_PREFIX}/transaction/material-inspection-note`;
const TRANSACTION_SRN = `${ROUTE_PREFIX}/transaction/store-receipt-note`;
const TRANSACTION_PRN = `${ROUTE_PREFIX}/transaction/purchase-return-note`;
const TRANSACTION_ITR = `${ROUTE_PREFIX}/transaction/internal-transfer-request`;
const TRANSACTION_ISI = `${ROUTE_PREFIX}/transaction/internal-store-issuance`;
const TRANSACTION_ISR = `${ROUTE_PREFIX}/transaction/internal-store-receipt`;
const TRANSACTION_SALE_RETURN_NOTE = `${ROUTE_PREFIX}/transaction/sale-return-note`;
const TRANSACTION_SIN = `${ROUTE_PREFIX}/transaction/sale-issue-note`;
const TRANSACTION_SAN = `${ROUTE_PREFIX}/transaction/store-adjustment-note`;
const TRANSACTION_VAN = `${ROUTE_PREFIX}/transaction/value-adjustment-note`;

const REPORTS_SWIM = `${ROUTE_PREFIX}/reports/store-wise-item-movement`;
const REPORTS_EWIL = `${ROUTE_PREFIX}/reports/expiry-wise-item-list`;
const REPORTS_EWV = `${ROUTE_PREFIX}/reports/expiry-wise-vendor`;
const REPORTS_SIS = `${ROUTE_PREFIX}/reports/store-item-summary`;
const REPORTS_SPBW = `${ROUTE_PREFIX}/reports/stock-position-batch-wise`;
const REPORTS_SPB = `${ROUTE_PREFIX}/reports/stock-position-barcode`;
const REPORTS_SPM = `${ROUTE_PREFIX}/reports/shift-management`;
const REPORTS_MWSP = `${ROUTE_PREFIX}/reports/manufacturer-wise-stock-position`;
const REPORTS_SSR = `${ROUTE_PREFIX}/reports/stock-summary-report`;
const REPORTS_TTR = `${ROUTE_PREFIX}/reports/transaction-tracking-report`;
const REPORTS_PSR = `${ROUTE_PREFIX}/reports/purchase-summary-report`;
const REPORTS_TV = `${ROUTE_PREFIX}/reports/transaction-valuation`;
const REPORTS_IVCW = `${ROUTE_PREFIX}/reports/item-value-category-wise`;
const REPORTS_FR = `${ROUTE_PREFIX}/reports/forecast-report`;
const REPORTS_UIR = `${ROUTE_PREFIX}/reports/unsold-items-report`;

const POS_SALES = `${ROUTE_PREFIX}/POS/sales`;
const POS_SR = `${ROUTE_PREFIX}/POS/sales-return`;
const POS_OS = `${ROUTE_PREFIX}/POS/open-shift`;
const POS_SM = `${ROUTE_PREFIX}/POS/shift-management`;
const POS_SSR = `${ROUTE_PREFIX}/POS/sale-summary-report`;
const POS_IWSR = `${ROUTE_PREFIX}/POS/item-wise-sale-report`;
const POS_IOD = `${ROUTE_PREFIX}/POS/items-on-demand`;
const POS_IS = `${ROUTE_PREFIX}/POS/items-shortage`;

export {
  ROUTE_PREFIX,
  ADMIN_USER_STORES,
  ADMIN_UT,
  ADMIN_USS,
  ADMIN_UCC,
  ADMIN_UST,
  DEFINITION_STORE,
  DEFINITION_MANUFACTURER,
  DEFINITION_VENDOR,
  DEFINITION_ITEM,
  DEFINITION_ITEM_DETAIL,
  DEFINITION_STORE_ITEMS,
  DEFINITION_TAX_TYPE,
  DEFINITION_TTD,
  DEFINITION_AAL,
  DEFINITION_RAAL,
  DEFINITION_VI,
  DEFINITION_GN,
  DEFINITION_IVL,
  DEFINITION_VT,
  DEFINITION_DF,
  DEFINITION_SIM,
  DEFINITION_CUSTOMER,
  TRANSACTION_PR,
  TRANSACTION_PRA,
  TRANSACTION_GAR,
  TRANSACTION_PO,
  TRANSACTION_POC,
  TRANSACTION_POA,
  TRANSACTION_MIN,
  TRANSACTION_SRN,
  TRANSACTION_PRN,
  TRANSACTION_ITR,
  TRANSACTION_ISI,
  TRANSACTION_ISR,
  TRANSACTION_SALE_RETURN_NOTE,
  TRANSACTION_SIN,
  TRANSACTION_SAN,
  TRANSACTION_VAN,
  REPORTS_SWIM,
  REPORTS_EWIL,
  REPORTS_EWV,
  REPORTS_SIS,
  REPORTS_SPBW,
  REPORTS_SPB,
  REPORTS_SPM,
  REPORTS_MWSP,
  REPORTS_SSR,
  REPORTS_TTR,
  REPORTS_PSR,
  REPORTS_TV,
  REPORTS_IVCW,
  REPORTS_FR,
  REPORTS_UIR,
  POS_SALES,
  POS_SR,
  POS_OS,
  POS_SM,
  POS_SSR,
  POS_IWSR,
  POS_IOD,
  POS_IS,
};
