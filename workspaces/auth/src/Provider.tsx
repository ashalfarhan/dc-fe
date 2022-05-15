import { compose } from '@utils';
import { FC, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

const Providers = compose(StrictMode, BrowserRouter, RecoilRoot);

export const AppProvider: FC = ({ children }) => {
  return (
    <Providers>
      <ToastContainer autoClose={1500} position="top-center" />
      {children}
    </Providers>
  );
};
