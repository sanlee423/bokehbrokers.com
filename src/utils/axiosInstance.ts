import axios from 'axios';

export const axInstance = axios.create({
  headers: {
    'X-API-KEY': process.env.CAMPEDIA_API_TOKEN,
  },
});
