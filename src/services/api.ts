import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openbrewerydb.org/',
  timeout: 3000,
});
