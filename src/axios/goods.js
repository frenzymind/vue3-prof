import axios from 'axios';
import router from '../router/index';

const productAxios = axios.create({
  baseURL: process.env.VUE_APP_JSON_SERVER + '/products',
});

productAxios.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    router.push('/auth?message=notauth');
  }

  return Promise.reject(error);
});

export default productAxios;
