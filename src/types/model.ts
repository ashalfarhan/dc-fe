export type LocationResult = {
  distance?: number
  latt_long: string
  location_type: 'City' | 'Region' | 'State' | 'Province' | 'Country' | 'Continent'
  woeid: number
  title: string
}

export type WeatherData = {
  consolidated_weather: Array<ConsolidateWeather>
  parent: {
    title: string
    location_type: string
    woeid: number
    latt_long: string
  }
  sources: Array<unknown>
  sun_rise: string
  sun_set: string
  time: string
  timezone: string
  timezone_name: string
} & LocationResult

export type ConsolidateWeather = {
  air_pressure: number
  applicable_date: string
  created: string
  humidity: number
  id: number
  max_temp: number
  min_temp: number
  predictability: number
  the_temp: number
  visibility: number
  weather_state_abbr: string
  weather_state_name: string
  wind_direction: number
  wind_direction_compass: string
  wind_speed: number
}
