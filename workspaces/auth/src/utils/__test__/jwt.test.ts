import { decodeToken, validateToken } from 'utils/jwt';

const minute = 60_000; // ms

const claim = {
  id: 'test-user',
  sub: 'some',
};

function generate(exp = Date.now() + 5 * minute) {
  const alg = 'eyJhbGciOiJIUzI1NiJ9';
  const claimPayload = Buffer.from(
    JSON.stringify({
      ...claim,
      exp,
    }),
    'utf8'
  )
    .toString('base64')
    .replaceAll('=', '');
  return [alg, claimPayload].join('.');
}

describe('jwt utils', () => {
  describe('validateToken', () => {
    it('should return false if falsy', () => {
      expect(validateToken(null)).toBe(false);
      expect(validateToken('')).toBe(false);
    });

    it('should return false if expired', () => {
      expect(validateToken(generate(Date.now() / 5000))).toBe(false);
    });

    it('should return true if not expired', () => {
      expect(validateToken(generate())).toBe(true);
      expect(validateToken(generate(Date.now() + 5000))).toBe(true);
    });
  });

  describe('decodeToken', () => {
    it('should return null if falsy', () => {
      expect(decodeToken(null)).toBe(null);
      expect(decodeToken('')).toBe(null);
    });

    it('should return sub and id', () => {
      expect(decodeToken(generate())).toStrictEqual(claim);
    });
  });
});
