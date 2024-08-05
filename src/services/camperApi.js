import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://669908cb2069c438cd711199.mockapi.io',
  
  // baseURL: 'https://run.mocky.io/v3/b8ed7fe7-df51-4b58-b2f0-0d2e32fc4b55',
});

const requestGetCampers = async () => {
  const { data } = await instance.get('/adverts');
  return data;
};

export { requestGetCampers };
