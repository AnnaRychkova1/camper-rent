import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://669908cb2069c438cd711199.mockapi.io',
});

const requestGetCampers = async () => {
  const { data } = await instance.get('/adverts');
  return data;
};

export { requestGetCampers };
