import { usePosition } from '@app/states';
import { CurrentResponse } from '@app/types';
import { fetcher } from '@app/utils';
import useSWR from 'swr';

export const useTodayTemp = () => {
  const position = usePosition(state => state.position);
  const { data } = useSWR<CurrentResponse>(() => {
    let q = 'auto:ip';
    if (position) {
      q = [position.latitude, position.longitude].join(',');
    }
    return '/api/current.json?q=' + q;
  }, fetcher);
  return {
    data,
  };
};
