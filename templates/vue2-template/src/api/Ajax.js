import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: config.ajaxUrl,
});

instance.interceptors.response.use(({ data }) => data);

export default (...args) => Promise.all(args.map((req) => instance(req)));
