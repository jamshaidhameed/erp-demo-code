export const resolveArray = (list) => (list && Array.isArray(list) ? list : []);

export const listByAttributeName = (list, fieldName = 'OID') => {
  if (!list) return {};
  const result = {};
  for (const element of list) {
    result[element[fieldName]] = element;
  }
  return result;
};
