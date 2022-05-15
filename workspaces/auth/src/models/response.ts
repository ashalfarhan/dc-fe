import { Profile } from './profile';

export type BaseResponse<T> =
  | {
      ok: true;
      data: T;
    }
  | {
      ok: false;
      error: string;
    };

export type GetProfileResponse = BaseResponse<Profile | null>;
export type AuthResponse = BaseResponse<{ token: string; user: Profile }>;
