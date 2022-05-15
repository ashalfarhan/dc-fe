import { FC } from 'react';
import Header from './Header';

export const Layout: FC = ({ children }) => {
  return (
    <div className="flex-1 min-h-screen flex flex-col">
      <Header />
      {children}
    </div>
  );
};
