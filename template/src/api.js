import axios from 'axios';
import Reactotron from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';

const tokenStorageKey = /* ENTER A KEY HERE */;
const baseURL = 'http://localhost:3000';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
});

export function loadToken() {
  return AsyncStorage.getItem(tokenStorageKey).then(token => {
    setAuthHeader(token);
    return token;
  });
}

export function setToken(token) {
  setAuthHeader(token);

  return AsyncStorage.setItem(tokenStorageKey, token);
}

export function clearToken() {
  setAuthHeader(null);

  return AsyncStorage.removeItem(tokenStorageKey);
}

function setAuthHeader(token) {
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers['Authorization'];
  }
}

export default api;
