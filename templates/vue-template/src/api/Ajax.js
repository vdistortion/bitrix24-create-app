// import { serialize } from 'object-to-formdata';
import qs from 'qs';
import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: config.path.ajaxUrl,
  transformRequest: (data, headers) => {
    headers['Content-Type'] = 'multipart/form-data';
    return qs.stringify(data, { arrayFormat: 'brackets' });
    // return serialize(data, {
    //   indices: true,
    //   nullsAsUndefineds: true,
    //   booleansAsIntegers: true,
    //   allowEmptyArrays: true,
    // });
  },
});

instance.interceptors.response.use(({ data }) => data);

export const Ajax = instance;
