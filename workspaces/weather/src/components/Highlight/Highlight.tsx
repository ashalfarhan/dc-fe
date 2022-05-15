import { Suspense } from 'react'
import { AiFillCloud } from 'react-icons/ai'
import { RiCompassDiscoverFill } from 'react-icons/ri'
import { useRecoilValue } from 'recoil'
import { todayWeatherState } from '../../states'

const Highlight = () => {
  return (
    <div className="mt-8">
      <h1 className="font-bold text-xl md:text-2xl">Today's Hightlights</h1>
      <div className="flex flex-col md:grid grid-cols-2 gap-8 mt-6">
        <div className="bg-card px-5 py-6 flex flex-col items-center">
          <h1>Wind Status</h1>
          <Suspense fallback={<AiFillCloud size={130} className="fill-slate-500 animate-pulse" />}>
            <WindStatus />
          </Suspense>
        </div>
        <div className="bg-card px-5 py-6 flex flex-col items-center">
          <h1>Humidity</h1>
          <Suspense fallback={<AiFillCloud size={130} className="fill-slate-500 animate-pulse" />}>
            <Humidity />
          </Suspense>
        </div>

        <div className="bg-card px-5 py-6 flex flex-col items-center">
          <h1>Visibility</h1>
          <Suspense fallback={<AiFillCloud size={80} className="fill-slate-500 animate-pulse" />}>
            <VisibilityInfo />
          </Suspense>
        </div>
        <div className="bg-card px-5 py-6 flex flex-col items-center">
          <h1>Air Pressure</h1>
          <Suspense fallback={<AiFillCloud size={80} className="fill-slate-500 animate-pulse" />}>
            <AirPressureInfo />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function WindStatus() {
  const todayData = useRecoilValue(todayWeatherState)

  return (
    <>
      <div className="mt-2">
        <span className="text-7xl font-bold leading-[72px]">
          {Math.round(todayData.wind_speed)}
        </span>
        <span className="text-3xl">mph</span>
      </div>
      <div className="flex space-x-4 items-center mt-4">
        <RiCompassDiscoverFill
          size={32}
          style={{ transform: `rotate(${todayData.wind_direction}deg)` }}
        />
        <span>{todayData.wind_direction_compass}</span>
      </div>
    </>
  )
}

function VisibilityInfo() {
  const todayData = useRecoilValue(todayWeatherState)

  return (
    <div className="mt-2">
      <span className="text-7xl font-bold leading-[72px]">{Math.round(todayData.visibility)}</span>
      <span className="text-3xl">miles</span>
    </div>
  )
}

function AirPressureInfo() {
  const todayData = useRecoilValue(todayWeatherState)

  return (
    <div className="mt-2">
      <span className="text-7xl font-bold leading-[72px]">{todayData.air_pressure}</span>
      <span className="text-3xl">mb</span>
    </div>
  )
}

function Humidity() {
  const todayData = useRecoilValue(todayWeatherState)

  return (
    <>
      <div className="mt-2">
        <span className="text-7xl font-bold leading-[72px]">{todayData.humidity}</span>
        <span className="text-3xl">%</span>
      </div>
      <HumidityRange value={todayData.humidity} />
    </>
  )
}

function HumidityRange({ value }: { value: number }) {
  return (
    <div className="w-full bg-gray-500 h-2 relative mt-8 rounded-xl">
      <span className="absolute text-accent left-0 bottom-2">0</span>
      <span className="absolute text-accent left-[50%] bottom-2">50</span>
      <span className="absolute text-accent right-0 bottom-2">100</span>
      <span className="absolute text-accent right-0 top-2">%</span>
      <div className="h-full bg-yellow-200 w-10 rounded-xl" style={{ width: `${value}%` }} />
    </div>
  )
}

export default Highlight
