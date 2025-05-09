import { serialize } from 'object-to-formdata';
import axios, { type AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  transformRequest(data, headers) {
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
