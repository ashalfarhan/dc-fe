import clsx from "clsx"
import { useRecoilState } from 'recoil'
import { temperatureState } from "../../states"

export default function TempSwitcher() {
  const [temp, setTemp] = useRecoilState(temperatureState)
  return (
    <div className="hidden md:flex justify-end space-x-2">
      <button
        onClick={() => setTemp('C')}
        className={clsx('text-xl font-bold rounded-full bg-accent text-white w-10 h-10', {
          'bg-white text-black': temp === 'C',
        })}
      >
        °C
      </button>
      <button
        onClick={() => setTemp('F')}
        className={clsx('text-xl font-bold rounded-full bg-accent text-white w-10 h-10', {
          'bg-white text-black': temp === 'F',
        })}
      >
        °F
      </button>
    </div>
  )
}
