import { useMemo } from 'react';
import useSWR from 'swr';
import { ForecastResponse } from '@app/types';
import { fetcher } from '@app/utils';
import ForecastCard from './ForecastCard';

export const Forecast = () => {
  const { data, error } = useSWR<ForecastResponse>(
    `/api/forecast.json?q=auto:ip&days=3`,
    fetcher
  );
  const { forecastday = [] } = data?.forecast || {};
  const forecasts = useMemo(() => forecastday.slice(1), [forecastday]);
  if (error) return <span>Oops, something wen't wrong 😢</span>;
  return (
    <div className="flex gap-4 mt-6 flex-wrap">
      {forecasts.map(forecast => (
        <ForecastCard data={forecast} key={forecast.date} />
      ))}
    </div>
  );
};
