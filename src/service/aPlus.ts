import axios from 'axios';

const aPlus = axios.create({
  baseURL: 'https://appanimeplus.tk/',
  headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS)' },
});

export { aPlus };
