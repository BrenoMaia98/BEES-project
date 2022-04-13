import axios from 'axios';

// Couldnt use inside create due to 'axios-mock-adapter' open issue with baseUrl config
// https://github.com/ctimmerm/axios-mock-adapter/issues/299
// needed to remove axios config
export const api = axios;
export const baseUrl = 'https://api.openbrewerydb.org/';
