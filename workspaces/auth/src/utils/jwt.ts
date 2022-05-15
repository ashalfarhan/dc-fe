import jwtDecode, { JwtPayload } from 'jwt-decode';

export const validateToken = (token: string | null): token is string => {
  if (!token) return false;
  try {
    const { exp } = jwtDecode<JwtPayload>(token);
    if (exp) return exp * 1000 > Date.now();
    return false;
  } catch {
    return false;
  }
};

export const decodeToken = (token: string | null) => {
  if (!token) return null;
  const valid = validateToken(token);
  if (!valid) return null;
  try {
    const { id, sub } = jwtDecode<JwtPayload & { id: string }>(token);
    return { id, sub };
  } catch {
    return null;
  }
};
