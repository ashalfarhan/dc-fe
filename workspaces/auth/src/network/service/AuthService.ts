import { AuthPayload, AuthResponse } from '@models';
import { http } from '@network';

export class AuthService {
  static readonly PREFIX = '/auth';

  static loginUser(data: AuthPayload) {
    return http.request<AuthResponse>({
      method: 'POST',
      url: `${this.PREFIX}/login`,
      data,
    });
  }

  static registerUser(data: AuthPayload) {
    return http.request<AuthResponse>({
      method: 'POST',
      url: `${this.PREFIX}/register`,
      data,
    });
  }
}
