import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ModalProvider } from './contexts/modal'
import { RecoilRoot } from 'recoil'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ModalProvider>
        <App />
      </ModalProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
