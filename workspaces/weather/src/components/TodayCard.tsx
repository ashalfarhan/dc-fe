import { IoLocationSharp } from 'react-icons/io5';
import { CurrentResponse } from '@app/types';
import { dateFormat } from '@app/utils';
import { useTemperature } from '@app/states';

export const TodayCard = ({ current, location }: CurrentResponse) => {
  const temp = useTemperature(state => state.temp);
  return (
    <div className="relative flex-1 flex flex-col justify-center">
      <div className="flex flex-col items-center gap-8">
        <div>
          <span className="text-9xl">
            {temp === 'C' ? current.temp_c : current.temp_f}
          </span>
          <span className="text-5xl">°{temp}</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <img
            src={`https:${current.condition.icon}`}
            alt={current.condition.text}
            height={64}
            width={64}
            className="mx-auto"
          />
          <span className="text-2xl text-accent">{current.condition.text}</span>
        </div>
        <div className="flex space-x-4 text-accent">
          <span>Today</span>
          <span>•</span>
          <span>{dateFormat.format(new Date())}</span>
        </div>
        <div className="flex items-center text-accent space-x-2">
          <IoLocationSharp size={24} />
          <span>
            {location.name} - {location.country}
          </span>
        </div>
      </div>
    </div>
  );
};
