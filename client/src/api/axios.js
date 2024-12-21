import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    if (typeof window !== 'undefined') {
      let localStorageData = window.localStorage.getItem('persist:shop/user');
      if (localStorageData && typeof localStorageData === 'string') {
        localStorageData = JSON.parse(localStorageData);
        console.log('Local Storage Data:', localStorageData);
        const accessToken = JSON.parse(localStorageData?.token);
        console.log(accessToken)
        config.headers = { Authorization: `Bearer ${accessToken}` };
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error.response.data);
  }
);

export default instance;
