import { atom } from 'recoil';
import { PersistStorage } from '@utils';

export const TOKEN_STORAGE_KEY = 'jid';

export const tokenState = atom<string | null>({
  key: 'tokenState',
  default: null,
  effects: [PersistStorage(TOKEN_STORAGE_KEY)],
});
