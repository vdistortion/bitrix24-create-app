import axios from 'axios';

const instance = axios.create({
  baseURL: `/apps/${window.DIRNAME_APP}/ajax/`,
});

instance.interceptors.response.use(({ data }) => data);

export default (...args) => Promise.all(args.map((req) => instance(req)));
