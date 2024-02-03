import { HttpClient } from './HttpClient';

export default {
  test(FormData = {}) {
    return HttpClient({
      url: 'index.php',
      method: 'post',
      data: FormData,
    }).then(this.handler);
  },

  handler(response) {
    if (response.success) return response.data;
    throw new Error(response.message);
  },
};
