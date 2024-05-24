import { HttpClient } from './HttpClient';

export default {
  post(url: string, FormData = {}) {
    return HttpClient({
      url,
      method: 'post',
      data: FormData,
    });
  },
};
