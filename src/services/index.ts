import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

// import swal from '../utils/swal';

axios.defaults.timeout = 15000; // 15秒的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('XIAOHOUCODE_USERINFO') ? JSON.parse(localStorage.getItem('XIAOHOUCODE_USERINFO')).accessToken : '';
    if (token) {
      /* eslint-disable-next-line no-param-reassign */
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
);

export default instance;
