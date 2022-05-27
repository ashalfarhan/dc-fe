import { useToggle } from '@ashalfarhan/hooks';
import { BiCurrentLocation } from 'react-icons/bi';
import { AiFillCloud } from 'react-icons/ai';
import useSWR from 'swr';
import {
  Forecast,
  TodayCard,
  Highlight,
  TempSwitcher,
  Sidebar,
} from './components';
import { CurrentResponse } from './types';
import { fetcher } from './utils';
import { usePosition } from './states';

function App() {
  const { open, onClose, onOpen } = useToggle();
  const { getCurrentPosition, position } = usePosition(
    ({ getCurrentPosition, position }) => ({ getCurrentPosition, position })
  );
  const { data } = useSWR<CurrentResponse>(() => {
    let q = 'auto:ip';
    if (position) {
      q = [position.latitude, position.longitude].join(',');
    }
    return '/api/current.json?q=' + q;
  }, fetcher);
  return (
    <div className="h-screen w-screen grid md:grid-cols-3 overflow-hidden">
      <aside className="bg-card p-8 overflow-x-hidden relative w-full flex flex-col">
        <Sidebar onClose={onClose} isOpen={open} />
        <div className="flex justify-between items-center">
          <button className="bg-accent text-white px-4 py-2" onClick={onOpen}>
            Search for places
          </button>
          <button
            className="bg-accent text-white rounded-full p-2"
            onClick={getCurrentPosition}
          >
            <BiCurrentLocation size={24} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-60 gap-y-12 absolute inset-0 m-auto max-h-min">
          <AiFillCloud size={140} className="fill-slate-700 animate-pulse" />
          <AiFillCloud
            size={140}
            className="fill-slate-700 animate-pulse scale-125"
          />
          <AiFillCloud
            size={140}
            className="fill-slate-700 animate-pulse scale-150"
          />
          <AiFillCloud size={140} className="fill-slate-700 animate-pulse" />
        </div>
        {data && <TodayCard current={data.current} location={data.location} />}
      </aside>
      <main className="md:col-span-2 p-8 w-full">
        <TempSwitcher />
        <Forecast />
        {data && <Highlight today={data?.current} />}
        <div className="text-center mt-4">created by ashal</div>
      </main>
    </div>
  );
}

export default App;
