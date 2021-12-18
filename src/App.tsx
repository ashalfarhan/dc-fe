import { useToggle } from '@ashalfarhan/hooks'
import { BiCurrentLocation } from 'react-icons/bi'
import Sidebar from './components/Sidebar'
import Highlight from './components/Highlight'
import { WeatherCard, TodayCard } from './components/WeatherCard'
import useGeolocation from './hooks/useGeolocation'
import { Suspense, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { BsCloudSun } from 'react-icons/bs'
import { userGeoState } from './states'
import { AiFillCloud } from 'react-icons/ai'
import TempSwitcher from './components/Utils/TempSwticher'

function App() {
  const geo = useGeolocation()
  const { open, onClose, onOpen } = useToggle()
  const setGeoState = useSetRecoilState(userGeoState)

  useEffect(() => {
    if (geo.status !== 'success') return

    setGeoState(geo.state)
  }, [geo])

  return (
    <div className="flex md:flex-row flex-col items-stretch">
      <Sidebar onClose={onClose} isOpen={open} />
      <aside className="md:w-1/3 w-full bg-card p-8 overflow-x-hidden min-h-screen flex flex-col">
        <div className="flex justify-between items-center">
          <button className="bg-accent text-white px-4 py-2" onClick={onOpen}>
            Search for places
          </button>
          <button className="bg-accent text-white rounded-full p-2">
            <BiCurrentLocation size={24} />
          </button>
        </div>
        <Suspense
          fallback={
            <AiFillCloud size={130} className="fill-slate-500 animate-bounce m-auto flex-1" />
          }
        >
          <TodayCard />
        </Suspense>
      </aside>
      <main className="flex-auto px-8 md:px-24 py-8">
        <TempSwitcher />
        <ConsolidatedWeather />
        <Highlight />
        <div className="text-center mt-10">created by ashal</div>
      </main>
    </div>
  )
}

function ConsolidatedWeather() {
  return (
    <div className="flex gap-9 mt-6 flex-wrap">
      {Array.from({ length: 5 }).map((_, i) => (
        <Suspense
          key={i}
          fallback={
            <div className="bg-card px-12 py-14 flex-1">
              <BsCloudSun className="animate-pulse" size={24} />
            </div>
          }
        >
          <WeatherCard day={i + 1} />
        </Suspense>
      ))}
    </div>
  )
}

export default App
