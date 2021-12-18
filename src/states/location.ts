import { atom, selector } from 'recoil'
import { LocationResult } from '../types/model'

const locationPlaceholder = {
  title: 'London',
  location_type: 'City',
  woeid: 44418,
  latt_long: '51.506321,-0.12714',
}

export const userGeoState = atom<null | GeolocationPosition>({
  key: 'userGeo',
  default: null,
})

export const userLocationState = selector<LocationResult>({
  key: 'userLocation',
  get: async ({ get }) => {
    let query = '?lattlong='
    const userGeo = get(userGeoState)
    const selected = get(selectedLocationState)

    if (!userGeo && !selected) return locationPlaceholder

    if (!userGeo && selected) {
      query += selected.latt_long
    } else if (userGeo && selected) {
      query += selected.latt_long
    } else if (userGeo && !selected) {
      query += userGeo.coords.latitude + ',' + userGeo.coords.longitude
    }

    try {
      const data = await fetch(`/api/location/search/${query}`).then(res => res.json())
      return data[0]
    } catch {
      return locationPlaceholder
    }
  },
})

export const locationSearchState = atom({
  key: 'locationSearch',
  default: '',
})

export const selectedLocationState = atom<LocationResult | null>({
  key: 'selectedLocation',
  default: null,
})

export const locationSearchResult = selector<LocationResult[]>({
  key: 'locationSearchResult',
  get: async ({ get }) => {
    const searchQuery = get(locationSearchState)
    if (!searchQuery) return []

    try {
      const data = await fetch(`/api/location/search/?query=${searchQuery}`).then(res => res.json())
      return data
    } catch {
      return []
    }
  },
})
