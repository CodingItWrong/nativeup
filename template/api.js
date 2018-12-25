import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
});

export function setToken(token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default api;
