import axios from 'axios';
import { LocalStorageKeys } from '../config/LocalStorageKeys';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
});

api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(
      localStorage.getItem(LocalStorageKeys.TOKEN) as string
      );
    const auth = token ? `Bearer ${token}` : '';
    config.headers = {
      Authorization: auth,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    return config;
  },
  (error) => console.error(error)
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      localStorage.removeItem(LocalStorageKeys.TOKEN);
      localStorage.removeItem(LocalStorageKeys.USER);
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default api;
