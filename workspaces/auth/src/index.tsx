import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './App';
import ReactDOM from 'react-dom';
import { AppProvider } from 'Provider';

if (process.env.NODE_ENV === 'development') {
  require('./mocks/browser').worker.start();
}

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
