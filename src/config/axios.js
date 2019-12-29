import axios from 'axios';

const onResponseSuccess = response => {
  return response;
};
const onResponseError = err => {
  const config = err.config;
  const status = err.status || err.response.status;
  if (status === 403 || status === 401) {
    alert('no auth');
  }

  if (status >= 500) {
    console.error('[axios-global]server error');
  }
  if (status === 400 && (config.errorHandle === undefined || config.errorHandle === false)) {
    console.error('[axios-global]bad request');
  }
  return Window.Promise.reject(err);
};

axios.interceptors.response.use(onResponseSuccess, onResponseError);
