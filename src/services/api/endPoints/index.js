import configs from 'configs';

const BaseUrlAPI = configs.authAPIBaseUrl;

// Auth

export const Login = `${BaseUrlAPI}/api/login`;
export const GetOrganizations = `${BaseUrlAPI}/api/user/getOrganizations`;
export const SetOrganization = `${BaseUrlAPI}/api/user/setOrganization`;

// Currency

export const GET_CURRENCY_LIST = `${BaseUrlAPI}/api/getCurrencies`;
