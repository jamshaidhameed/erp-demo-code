import { store } from 'store';

const storeState = store.getState();
const payrollBaseUrl = `${storeState.configs.apiBaseUrls.payroll}/api/payroll`;
const HR_PREFIX = `${payrollBaseUrl}/HR`;
const DEFINITIONS_PREFIX = `${payrollBaseUrl}/definitions`;

/* ===============================        Human RESOURCES      ==========================================  */

// Employee Types
export const GET_HR_EMPLOYEE_TYPES_LIST = `${HR_PREFIX}/employee-types/get-list`;
export const GET_HR_EMPLOYEE_TYPE = `${HR_PREFIX}/employee-types/get-by-ID`;
export const ADD_HR_EMPLOYEE_TYPE = `${HR_PREFIX}/employee-types/create`;
export const UPDATE_HR_EMPLOYEE_TYPE = `${HR_PREFIX}/employee-types/update`;
export const DELETE_HR_EMPLOYEE_TYPES = `${HR_PREFIX}/employee-types/delete`;

// Employee Categories
export const GET_HR_EMPLOYEE_CATEGORIES_LIST = `${HR_PREFIX}/employee-categories/get-list`;
export const GET_HR_EMPLOYEE_CATEGORY = `${HR_PREFIX}/employee-categories/get-by-ID`;
export const ADD_HR_EMPLOYEE_CATEGORY = `${HR_PREFIX}/employee-categories/create`;
export const UPDATE_HR_EMPLOYEE_CATEGORY = `${HR_PREFIX}/employee-categories/update`;
export const DELETE_HR_EMPLOYEE_CATEGORIES = `${HR_PREFIX}/employee-categories/delete`;

// Locations
export const GET_HR_LOCATIONS_LIST = `${HR_PREFIX}/locations/list`;
export const GET_HR_LOCATION = `${HR_PREFIX}/locations/detail`;
export const ADD_HR_LOCATION = `${HR_PREFIX}/locations/create`;
export const UPDATE_HR_LOCATION = `${HR_PREFIX}/locations/update`;
export const DELETE_HR_LOCATIONS = `${HR_PREFIX}/locations/delete`;

// Banks
export const GET_HR_BANKS_LIST = `${HR_PREFIX}/employee-banks/get-list`;
export const GET_HR_BANK = `${HR_PREFIX}/employee-banks/get-by-id`;
export const ADD_HR_BANK = `${HR_PREFIX}/employee-banks/create`;
export const UPDATE_HR_BANK = `${HR_PREFIX}/employee-banks/update`;
export const DELETE_HR_BANKS = `${HR_PREFIX}/employee-banks/delete`;

// Designations
export const GET_HR_DESIGNATIONS_LIST = `${HR_PREFIX}/designations/get-list`;
export const GET_HR_DESIGNATION = `${HR_PREFIX}/designations/get-by-ID`;
export const ADD_HR_DESIGNATION = `${HR_PREFIX}/designations/create-designation`;
export const UPDATE_HR_DESIGNATION = `${HR_PREFIX}/designations/update-designation`;
export const DELETE_HR_DESIGNATION = `${HR_PREFIX}/designations/delete-designation`;

// Executive Grades
export const GET_HR_EXECUTIVE_GRADES_LIST = `${HR_PREFIX}/executive-grades/get-list`;
export const GET_HR_EXECUTIVE_GRADE = `${HR_PREFIX}/executive-grades/get-by-ID`;
export const ADD_HR_EXECUTIVE_GRADE = `${HR_PREFIX}/executive-grades/create`;
export const UPDATE_HR_EXECUTIVE_GRADE = `${HR_PREFIX}/executive-grades/update`;
export const DELETE_HR_EXECUTIVE_GRADES = `${HR_PREFIX}/executive-grades/delete`;

// EOBI
export const GET_HR_EOBIS_LIST = `${HR_PREFIX}/eobi/list`;
export const GET_HR_EOBI = `${HR_PREFIX}/eobi/detail`;
export const ADD_HR_EOBI = `${HR_PREFIX}/eobi/create`;
export const UPDATE_HR_EOBI = `${HR_PREFIX}/eobi/update`;
export const DELETE_HR_EOBI = `${HR_PREFIX}/eobi/delete`;

// Employee Basic Info
export const GET_HR_EMPLOYEE_BASIC_INFO_LIST = `${HR_PREFIX}/employee-basic-info/get-list`;
export const GET_HR_EMPLOYEE_BASIC_INFO = `${HR_PREFIX}/employee-basic-info/get-by-ID`;
export const ADD_HR_EMPLOYEE_BASIC_INFO = `${HR_PREFIX}/employee-basic-info/create`;
export const UPDATE_HR_EMPLOYEE_BASIC_INFO = `${HR_PREFIX}/employee-basic-info/update`;
export const DELETE_HR_EMPLOYEE_BASIC_INFO = `${HR_PREFIX}/employee-basic-info/delete`;

/* ===============================        DEFINITIONS      ==========================================  */

// Advance Types
export const GET_DEFINITIONS_ADVANCE_TYPES_LIST = `${DEFINITIONS_PREFIX}/advance-types/get-list`;
export const GET_DEFINITIONS_ADVANCE_TYPE = `${DEFINITIONS_PREFIX}/advance-types/get-by-ID`;
export const ADD_DEFINITIONS_ADVANCE_TYPE = `${DEFINITIONS_PREFIX}/advance-types/create`;
export const UPDATE_DEFINITIONS_ADVANCE_TYPE = `${DEFINITIONS_PREFIX}/advance-types/update`;
export const DELETE_DEFINITIONS_ADVANCE_TYPES = `${DEFINITIONS_PREFIX}/advance-types/delete`;

// Addition Types
export const GET_ADDITION_ADVANCE_TYPES_LIST = `${DEFINITIONS_PREFIX}/advance-types/get-list`;
export const GET_ADDITION_ADVANCE_TYPE = `${DEFINITIONS_PREFIX}/advance-types/get-by-ID`;
export const ADD_ADDITION_ADVANCE_TYPE = `${DEFINITIONS_PREFIX}/advance-types/create`;
export const UPDATE_ADDITION_ADVANCE_TYPE = `${DEFINITIONS_PREFIX}/advance-types/update`;
export const DELETE_ADDITION_ADVANCE_TYPES = `${DEFINITIONS_PREFIX}/advance-types/delete`;
