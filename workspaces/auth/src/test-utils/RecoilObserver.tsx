import { ReactNode, useEffect } from 'react';
import { RecoilState, useRecoilValue } from 'recoil';

type RecoilObserverProps<T> = {
  onChange: (val: T) => void;
  atom: RecoilState<T>;
  children?: ReactNode;
};

export const RecoilObserver = <T,>({
  onChange,
  atom,
  children = null,
}: RecoilObserverProps<T>) => {
  const value = useRecoilValue(atom);

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return <>{children}</>;
};
