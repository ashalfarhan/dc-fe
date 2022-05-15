import { Profile } from '@models';
import { atom } from 'recoil';

export const profileState = atom<Profile | null>({
  key: 'profileState',
  default: null,
});
