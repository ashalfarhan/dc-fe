import { AiFillCloud } from 'react-icons/ai'
import { IoLocationSharp } from 'react-icons/io5'
import { useRecoilValue } from 'recoil'
import { temperatureState, todayWeatherState, userLocationState } from '../../states'
import { getTempValue } from '../../utils'

const TodayCard = () => {
  const location = useRecoilValue(userLocationState)
  const todayData = useRecoilValue(todayWeatherState)
  const temp = useRecoilValue(temperatureState)

  return (
    <>
      <div className="relative h-[320px] flex items-center justify-center">
        <img
          src={`https://www.metaweather.com/static/img/weather/${todayData.weather_state_abbr}.svg`}
          alt={todayData.weather_state_name}
          height={200}
          width={200}
        />
        <AiFillCloud
          size={140}
          className="fill-slate-700 animate-pulse absolute opacity-20 top-0 -left-20"
        />
        <AiFillCloud
          size={140}
          className="fill-slate-700 animate-pulse absolute opacity-20 top-0 -right-20"
        />
        <AiFillCloud
          size={140}
          className="fill-slate-700 animate-pulse absolute opacity-20 bottom-0 -right-20"
        />
        <AiFillCloud
          size={140}
          className="fill-slate-700 animate-pulse absolute opacity-20 bottom-0 -left-24"
        />
      </div>
      <div className="flex flex-col items-center space-y-8">
        <div>
          <span className="text-9xl">{getTempValue(todayData.the_temp, temp)}</span>
          <span className="text-5xl">°{temp}</span>
        </div>
        <div className="text-4xl text-accent">{todayData.weather_state_name}</div>
        <div className="flex space-x-4 text-accent">
          <span>Today</span>
          <span>•</span>
          <span>{new Date().toDateString()}</span>
        </div>
        <div className="flex items-center text-accent space-x-2">
          <IoLocationSharp size={24} />
          <span>{location.title}</span>
        </div>
      </div>
    </>
  )
}

export default TodayCard
