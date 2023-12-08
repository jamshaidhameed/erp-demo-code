import { removeCommaFromStr } from './strings';

export const tryParseInt = (val, defaultValue = 0) => {
  val = parseInt(removeCommaFromStr(val));
  return isNaN(val) ? defaultValue : val;
};

export const tryParseFloat = (val, defaultValue = 0) => {
  val = parseFloat(removeCommaFromStr(val));
  return isNaN(val) ? defaultValue : val;
};

export const thousandFormat = (num, decimalPoint = 2) =>
  tryParseFloat(num)
    .toFixed(decimalPoint)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
