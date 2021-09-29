import axios from 'axios';

const API_KEY = process.env.VUE_APP_API_KEY;
const BASE_URL = process.env.VUE_APP_BASE_URL;

export const fetchNews = (page) => {
  return axios.get(`${BASE_URL}apiKey=${API_KEY}&country=us&page=${page}`);
};
