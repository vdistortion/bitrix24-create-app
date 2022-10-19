import { serialize } from 'object-to-formdata';
import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: config.ajaxUrl,
});

instance.interceptors.response.use(({ data }) => data);

const Ajax = (...args) => Promise.all(args.map((req) => instance(req)));
const serializeRequest = (data) => serialize(data, {
  indices: true,
  nullsAsUndefineds: true,
  booleansAsIntegers: true,
  allowEmptyArrays: true,
});

export {
  Ajax,
  serializeRequest,
};
