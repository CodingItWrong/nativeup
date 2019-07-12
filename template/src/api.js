import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sandboxapi.reststate.org/',
});

export default api;
