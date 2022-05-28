import { usePosition } from '@app/states';
import { ForecastResponse } from '@app/types';
import { fetcher } from '@app/utils';
import { useMemo } from 'react';
import useSWR from 'swr';

export const useForecast = () => {
  const potision = usePosition(state => state.position);
  const { data, error } = useSWR<ForecastResponse>(() => {
    let q = 'auto:ip';
    if (potision) {
      q = [potision.latitude, potision.longitude].join(',');
    }
    return `/api/forecast.json?q=${q}&days=3`;
  }, fetcher);
  const { forecastday = [] } = data?.forecast || {};
  const forecasts = useMemo(() => forecastday.slice(1), [forecastday]);
  return { forecasts, error };
};
