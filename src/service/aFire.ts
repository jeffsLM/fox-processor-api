import axios from 'axios';

const aFire = axios.create({
  baseURL: 'https://animefire.net/',
});

export { aFire };
