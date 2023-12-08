import { padZeros } from 'utils/shared/strings';

export const generateCode = (list, code_length = 2, attribute = 'code') => {
  if (list.length === 0) return padZeros('1', code_length);
  const [prev] = [...list].sort((a, b) => b[attribute] - a[attribute]);
  const currentCode = parseInt(prev[attribute] ?? 0) + 1;
  return currentCode.toString().length > code_length ? '' : padZeros(currentCode, code_length);
};
