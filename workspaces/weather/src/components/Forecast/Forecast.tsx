import ForecastCard from './ForecastCard';
import { useForecast } from '@app/services';

export const Forecast = () => {
  const { error, forecasts } = useForecast();
  if (error) return <span>Oops, something wen't wrong 😢</span>;
  return (
    <div className="flex gap-4 mt-6 flex-wrap md:flex-row flex-col">
      {forecasts.map(forecast => (
        <ForecastCard data={forecast} key={forecast.date} />
      ))}
    </div>
  );
};
