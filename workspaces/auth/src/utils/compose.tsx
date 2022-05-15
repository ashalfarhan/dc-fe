import { ComponentType } from 'react';

export const compose = (...providers: ComponentType[]) => {
  return providers.reduce(
    (Prev, Curr) => {
      return ({ children }) => (
        <Prev>
          <Curr>{children}</Curr>
        </Prev>
      );
    },
    (({ children }) => <>{children}</>) as ComponentType
  );
};
