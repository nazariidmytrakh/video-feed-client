import axios from 'axios';

const api = axios.create();

api.interceptors.response.use(
  (response) => (response.data ? response.data : response),
);

export default api;
