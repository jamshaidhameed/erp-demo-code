import { TRANSACTION_TYPES_ENUM } from 'constants/shared/common';
import { resolveArray } from 'utils/shared/list';
import { thousandFormat, tryParseFloat } from 'utils/shared/numbers';

export const getJVStatus = (is_submitted, is_approved) =>
  is_approved == 1 ? 'Approved' : is_submitted == 1 ? 'Submitted' : 'Not Submitted';

export const calculateJVStats = (list) => {
  let creditAmount = 0;
  let debitAmount = 0;
  let difference = 0;

  const listData = resolveArray(list);
  for (const element of listData) {
    if (element.TYPE === TRANSACTION_TYPES_ENUM.credit)
      creditAmount += tryParseFloat(element.original_amount);

    if (element.TYPE === TRANSACTION_TYPES_ENUM.debit)
      debitAmount += tryParseFloat(element.original_amount);
  }

  difference = Math.abs(creditAmount - debitAmount);

  return {
    totalCredit: thousandFormat(creditAmount),
    totalDebit: thousandFormat(debitAmount),
    difference: thousandFormat(difference),
  };
};
