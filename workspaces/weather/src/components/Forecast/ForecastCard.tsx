import { Forecastday } from '@app/types';
import { dateFormat } from '@app/utils';

const ForecastCard = ({ data }: { data: Forecastday }) => {
  return (
    <div className="flex-1 bg-card flex flex-col items-center p-4">
      <span>{dateFormat.format(new Date(data.date))}</span>
      <img
        src={`https:${data.day.condition.icon}`}
        alt="{weather.weather_state_name}"
        width={64}
        height={64}
      />
      <div className="flex justify-between gap-x-2">
        <span>{data.day.mintemp_c}°C</span>
        <span className="text-accent">{data.day.maxtemp_c}°C</span>
      </div>
    </div>
  );
};

export default ForecastCard;
