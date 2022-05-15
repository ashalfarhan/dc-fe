import { atom, selector } from 'recoil'
import { Photo } from '../../types/model'

export const photoState = atom<Photo[]>({
  key: 'photoState',
  default: [],
})

export const photoFetchPage = atom({
  key: 'photoFetchPage',
  default: 1,
})

export const photoSearchState = atom({
  key: 'photoSearchState',
  default: '',
})

export const foundSearchPhoto = selector({
  key: 'foundSearchPhoto',
  get: ({ get }) => {
    const photos = get(photoState)
    const search = get(photoSearchState)
    return photos.filter(photo => photo.label?.toLowerCase()?.includes(search.toLowerCase()))
  },
})
