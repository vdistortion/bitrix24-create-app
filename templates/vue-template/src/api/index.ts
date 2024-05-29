import { HttpClient } from './HttpClient';

export default {
  post(url: string, FormData = {}) {
    return HttpClient({
      url,
      method: 'post',
      data: FormData,
    });
  },

  get(url: string, params = {}) {
    return HttpClient({
      url,
      method: 'get',
      params,
    });
  },

  getUser() {
    return this.get('https://jsonplaceholder.typicode.com/users', {
      _limit: 10,
    });
  },
};
