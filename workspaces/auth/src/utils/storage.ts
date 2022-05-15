import { AtomEffect } from 'recoil';
import { parseJson } from 'utils';

export const PersistStorage = <T>(
  customKey?: string,
  storage = sessionStorage,
): AtomEffect<T> => {
  return ({ onSet, node, trigger, setSelf }) => {
    const key = customKey || node.key;

    onSet((val, _old, isReset) => {
      if (isReset) return storage.removeItem(key);
      storage.setItem(key, JSON.stringify(val));
    });

    if (trigger === 'get') {
      const item = storage.getItem(key);
      return setSelf(parseJson(item));
    }
  };
};
