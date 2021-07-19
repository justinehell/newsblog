import { LIMIT } from '../utils/appSettings';

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

export const fetchNews = (offset) => {
  return fetch(
    `${BASE_URL}access_key=${API_KEY}&languages=fr,en&limit=${LIMIT}&offset=${offset}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .then((data) => {
      return data.data;
    })
    .catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
      return Promise.reject(err);
    });
};
