import { SearchResponse } from '@app/types';
import { fetcher } from '@app/utils';
import useSWR from 'swr';

export const useSearchLocation = (query: string) => {
  const { data } = useSWR<SearchResponse>(
    () => query && `/api/search.json?q=${query}`,
    fetcher
  );
  const isNotFound = !data || !data.length;
  return {
    isNotFound,
    data,
  };
};
