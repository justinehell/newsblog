import { LIMIT } from '../utils/appSettings';
import axios from 'axios';

const API_KEY = process.env.VUE_APP_API_KEY;
const BASE_URL = process.env.VUE_APP_BASE_URL;

export const fetchNews = (offset) => {
  return axios.get(
    `${BASE_URL}access_key=${API_KEY}&languages=fr,en&limit=${LIMIT}&offset=${offset}`
  );
};
