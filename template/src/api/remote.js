import axios from 'axios';

const baseURL = 'http://localhost:3000';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
});

export default api;
