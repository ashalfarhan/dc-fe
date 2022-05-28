import { useTemperature } from '@app/states';
import { Forecastday } from '@app/types';
import { dateFormat } from '@app/utils';

const ForecastCard = ({ data }: { data: Forecastday }) => {
  const temp = useTemperature(state => state.temp);
  return (
    <div className="flex-1 bg-card flex flex-col items-center p-4">
      <span>{dateFormat.format(new Date(data.date))}</span>
      <img
        src={`https:${data.day.condition.icon}`}
        alt={data.day.condition.text}
        width={64}
        height={64}
      />
      <div className="flex justify-between gap-x-2">
        <span>
          {temp === 'C' ? data.day.mintemp_c : data.day.mintemp_f}°{temp}
        </span>
        <span className="text-accent">
          {temp === 'C' ? data.day.maxtemp_c : data.day.maxtemp_f}°{temp}
        </span>
      </div>
    </div>
  );
};

export default ForecastCard;
