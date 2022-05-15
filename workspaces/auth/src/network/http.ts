import { TOKEN_STORAGE_KEY } from '@state';
import { parseJson } from '@utils';
import axios from 'axios';
import { toast } from 'react-toastify';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

http.interceptors.request.use(
  config => {
    const token = parseJson(sessionStorage.getItem(TOKEN_STORAGE_KEY), '');
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    if (axios.isAxiosError(error)) {
      toast.error(error.request?.data?.message);
      return Promise.reject(error);
    }
    if (error instanceof Error) {
      toast.error(error.message);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => response,
  error => {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data.error || error.message;
      const err = error.response?.data;
      toast.error(message);
      return Promise.reject(err);
    }

    if (error instanceof Error) {
      toast.error(error.message);
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default http;
