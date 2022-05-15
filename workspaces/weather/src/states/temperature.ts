import { atom } from 'recoil'

export const temperatureState = atom<'C' | 'F'>({
  key: 'temperature',
  default: 'C',
})
