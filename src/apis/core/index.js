import axios from 'axios';
import { BEARER, TOKEN } from '../../utils/constant/auth';
import { getStorage } from '../../utils/storage';

const API_BASE_URL =
  process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_BASE_URL : '/api';

// 인스턴스 생성
const baseRequest = axios.create({
  baseURL: API_BASE_URL,
});

const authRequest = axios.create({
  baseURL: API_BASE_URL,
});

const postDataRequest = axios.create({
  baseURL: API_BASE_URL,
});

baseRequest.interceptors.response.use(
  (response) => {
    console.log(process.env);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authRequest.interceptors.request.use(
  (config) => {
    config.headers.authorization = BEARER + getStorage(TOKEN);
    return config;
  },
  (error) => {
    Promise.reject(error.response);
  }
);

postDataRequest.interceptors.request.use(
  (config) => {
    config.headers.authorization = BEARER + getStorage(TOKEN);
    config.headers['Content-Type'] = 'multipart/form-data';
    return config;
  },
  (error) => {
    Promise.reject(error.response);
  }
);

export { baseRequest, authRequest, postDataRequest };
