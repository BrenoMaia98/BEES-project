import axios from 'axios';

export const api = axios.create({
  timeout: 3000,
});
// Couldnt use inside create due to 'axios-mock-adapter' open issue with baseUrl config
// https://github.com/ctimmerm/axios-mock-adapter/issues/299
export const baseUrl = 'https://api.openbrewerydb.org/';
