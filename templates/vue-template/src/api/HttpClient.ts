import { serialize } from 'object-to-formdata';
import axios, { AxiosInstance } from 'axios';
import config from '@/config';

const instance: AxiosInstance = axios.create({
  baseURL: config.path.httpBaseUrl,

  transformRequest: (data, headers) => {
    headers['Content-Type'] = 'multipart/form-data';

    return serialize(data, {
      indices: true,
      nullsAsUndefineds: true,
      allowEmptyArrays: true,
    });
  },
});

instance.interceptors.response.use(({ data }) => data);

export const HttpClient: AxiosInstance = instance;
