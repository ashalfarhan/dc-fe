import { parseJson, isJsonString } from '../json';

describe('json utils', () => {
  describe('isJsonString', () => {
    it('should return true if valid json string', () => {
      expect(isJsonString('null')).toBeTruthy();
      expect(isJsonString('{}')).toBeTruthy();
      expect(isJsonString('[]')).toBeTruthy();
    });
    it('should return true if not valid json string', () => {
      expect(isJsonString('{{')).toBeFalsy();
      expect(isJsonString('{}}')).toBeFalsy();
      expect(isJsonString('[][')).toBeFalsy();
    });

    it('should return false if not string', () => {
      expect(isJsonString({})).toBeFalsy();
      expect(isJsonString([])).toBeFalsy();
      expect(isJsonString(12)).toBeFalsy();
      expect(isJsonString(false)).toBeFalsy();
    });
  });

  describe('parseJson', () => {
    it('should return the default value if provided, when not valid json', () => {
      expect(parseJson('{', 20)).toBe(20);
    });

    it('should return undefined if not provided default, when not valid json', () => {
      expect(parseJson('{')).toBeUndefined();
    });

    it('should return the correct value', () => {
      const expected = { name: 'john' };
      const stringified = JSON.stringify(expected);
      expect(parseJson(stringified)).toEqual(expected);
    });
  });
});
