import { useRecoilValue } from 'recoil'
import { futureWeatherSelector, temperatureState } from '../../states'
import { days, getTempValue } from '../../utils'

type WeatherCardProps = {
  day: number
}

const WeatherCard = ({ day }: WeatherCardProps) => {
  const weather = useRecoilValue(futureWeatherSelector(day))
  const temp = useRecoilValue(temperatureState)

  return (
    <div className="flex-1 bg-card px-5 py-[18px] flex flex-col items-center">
      <span>{days[new Date(weather.applicable_date).getDay()]}</span>
      <img
        className="mt-3"
        src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`}
        alt={weather.weather_state_name}
        width={52}
        height={52}
      />
      <div className="flex justify-between mt-8 space-x-2">
        <span>
          {getTempValue(weather.min_temp, temp)}°{temp}
        </span>
        <span className="text-accent">
          {getTempValue(weather.max_temp, temp)}°{temp}
        </span>
      </div>
    </div>
  )
}

export default WeatherCard
