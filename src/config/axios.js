import axios from 'axios';

const onResponseSuccess = response => {
  return response;
};
const onResponseError = err => {
  const status = err.status || err.response.status;
  if (status === 403 || status === 401) {
    alert('no auth');
  }

  if (status >= 500 || status === 400) {
    alert('[axios-global]invalid request');
  }
  return Window.Promise.reject(err);
};

axios.interceptors.response.use(onResponseSuccess, onResponseError);
