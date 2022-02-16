import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'http://adresseUrl',
});

export default apiAxios;
