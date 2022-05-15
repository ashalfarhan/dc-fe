export const isJsonString = (str: unknown): str is string => {
  if (!str) return false;
  if (typeof str !== 'string') return false;
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
};

export const parseJson = <T>(val: unknown, _default?: T): T => {
  if (isJsonString(val)) {
    return JSON.parse(val);
  }

  return _default as T;
};
