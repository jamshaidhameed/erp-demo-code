export const MAX_AMOUNT_LIMIT = 999_999_999.99;
export const DEFAULT_INPUT_DIGITS_LENGTH = 250;
export const DEFAULT_PRINT_FONT_SIZE = 11;
export const TRANSACTION_TYPES_OPTIONS = [
  {
    label: 'Debit',
    value: 'debit',
  },
  {
    label: 'Credit',
    value: 'credit',
  },
];

export const TRANSACTION_TYPES_ENUM = {
  debit: 'debit',
  credit: 'credit',
};

export const BOOLEAN_OPTIONS = [
  {
    label: 'Yes',
    value: true,
  },
  {
    label: 'No',
    value: false,
  },
];

export const OPEN_CLOSE_OPTIONS = [
  {
    label: 'Open',
    value: '1',
  },
  {
    label: 'Close',
    value: '0',
  },
];

export const OPEN_CLOSE_ENUM = {
  0: 'Close',
  1: 'Open',
};

export const DATE_FORMATE = {
  1: 'DD/MMM/YYYY hh:mm:ss A',
  2: 'MMM DD, YYYY hh:mm:ss A',
  3: 'MMM DD, YYYY hh:mm A',
  4: 'DD/MMM/YYYY HH:mm:ss',
  5: 'HH:mm:ss',
  6: 'MMM DD, YYYY',
  7: 'hh:mm:ss A',
  8: 'hh:mm A',
  9: 'YYYY-MM-DD',
  10: 'DD/MM/YYYY',
};

export const shortKeys = {
  F1: 'F1',
  F2: 'F2',
  F3: 'F3',
  F4: 'F4',
  F5: 'F5',
  F6: 'F6',
  F7: 'F7',
  F8: 'F8',
  F9: 'F9',
  F10: 'F10',
  F11: 'F11',
  F12: 'F12',
};

export const statusCodes = {
  OK: 200,
  UNAUTHORIZED: 401,
};

export const DEFAULT_MSG = {
  StandardErrorMsg: 'Something Went wrong. Please try Again.',
  FormValidationMsg: 'Please fix the errors and try again.',
  SaveMsg: 'Saved successfully',
  DeleteMsg: 'Deleted successfully',
  VoidMsg: 'Voided successfully',
  noRecordFound: 'No record found.',
  DeleteConfirmMsg: 'Are you sure you want to delete this record?',
  VoidConfirmMsg: 'Are you sure you want to void this record?',
  IsRequired: ' is required.',
  NoPermission: " You don't have permission.",
  InvalidSession: 'Session expired or invalid.',
  InvalidId: 'Invalid ID',
};

export const FORM_SUBMIT_TYPES = {
  save: 'save',
  update: 'update',
  delete: 'delete',
};

export const DEFAULT_AUTO_COMPLETE = {
  value: '',
  defaultValue: '',
  option: null,
};

export const DEFAULT_TABLE_PROPS = {
  data: [],
  current: 1,
  pageSize: 10,
  total: 0,
  loading: false,
  sortOrder: '',
  sortField: '',
};

export const TABLE_ACTIONS = {
  sort: 'sort',
  filter: 'filter',
  paginate: 'paginate',
};

export const INPUT_TYPES = {
  text: 'text',
  email: 'email',
  number: 'number',
  phone: 'phone',
  password: 'password',
  textArea: 'textArea',
  amount: 'amount',
};
