export const removeCommaFromStr = (val) => (val ? val.toString().replace(/,/g, '').trim() : '');

export const padZeros = (val, count = 0) => {
  if (!val) return '';
  return val.toString().padStart(count, '0');
};
