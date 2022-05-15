import { selector, selectorFamily } from 'recoil'
import { WeatherData } from '../types/model'
import { userLocationState } from './location'

export const userWeatherState = selector<WeatherData>({
  key: 'userWeather',
  get: async ({ get }) => {
    const location = get(userLocationState)
    const data = await fetch(`/api/location/${location.woeid}/`).then(res => res.json())
    return data
  },
})

export const futureWeatherSelector = selectorFamily({
  key: 'futureWeather',
  get:
    (day: number) =>
    ({ get }) => {
      return get(userWeatherState).consolidated_weather[day]
    },
})

export const todayWeatherState = selector({
  key: 'todayWeather',
  get: ({ get }) => get(userWeatherState).consolidated_weather[0],
})
