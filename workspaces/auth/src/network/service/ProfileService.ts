import {
  BaseResponse,
  GetProfileResponse,
  UpdateProfilePayload,
} from '@models';
import { http } from '@network';

export class ProfileService {
  static readonly PREFIX = '/users/profile';

  static getUserProfile() {
    return http.request<GetProfileResponse>({
      method: 'GET',
      url: this.PREFIX,
    });
  }

  static updateProfile(profileId: string, data: UpdateProfilePayload) {
    return http.request<BaseResponse<void>>({
      method: 'PUT',
      url: `${this.PREFIX}/${profileId}`,
      data,
    });
  }
}
